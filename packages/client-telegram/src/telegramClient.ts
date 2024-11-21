import { Context, Telegraf } from "telegraf";

import { IAgentRuntime } from "@ai16z/eliza/src/types.ts";
import { MessageManager } from "./messageManager.ts";
import { elizaLogger } from "@ai16z/eliza/src/logger.ts";

export class TelegramClient {
    private bot: Telegraf<Context>;
    private runtime: IAgentRuntime;
    private messageManager: MessageManager;

    constructor(runtime: IAgentRuntime, botToken: string) {
        elizaLogger.log("📱 Constructing new TelegramClient...");
        this.runtime = runtime;
        this.bot = new Telegraf(botToken);
        this.messageManager = new MessageManager(this.bot, this.runtime);

        elizaLogger.log("✅ TelegramClient constructor completed");
    }

    public async start(): Promise<void> {
        elizaLogger.log("🚀 Starting Telegram bot...");
        try {
            this.bot.launch({
                dropPendingUpdates: true,
            });
            elizaLogger.log(
                "✨ Telegram bot successfully launched and is running!"
            );

            await this.bot.telegram.getMe().then((botInfo) => {
                this.bot.botInfo = botInfo;
            });

            console.log(`Bot username: @${this.bot.botInfo?.username}`);
            
            this.messageManager.bot = this.bot;

            // Include if you want to view message maanger bot info
            // console.log(`Message Manager bot info: @${this.messageManager.bot}`);

            elizaLogger.log("Setting up message handler...");

            this.bot.on("message", async (ctx) => {
                try {
                    console.log("📥 Received message:", ctx.message);
                    await this.messageManager.handleMessage(ctx);
                } catch (error) {
                    elizaLogger.error("❌ Error handling message:", error);
                    await ctx.reply(
                        "An error occurred while processing your message."
                    );
                }
            });

            // Handle specific message types for better logging
            this.bot.on("photo", (ctx) => {
                elizaLogger.log(
                    "📸 Received photo message with caption:",
                    ctx.message.caption
                );
            });

            this.bot.on("document", (ctx) => {
                elizaLogger.log(
                    "📎 Received document message:",
                    ctx.message.document.file_name
                );
            });

            this.bot.catch((err, ctx) => {
                elizaLogger.error(`❌ Telegram Error for ${ctx.updateType}:`, err);
                ctx.reply("An unexpected error occurred. Please try again later.");
        });

            // Graceful shutdown handlers
            const shutdownHandler = async (signal: string) => {
                elizaLogger.log(
                    `⚠️ Received ${signal}. Shutting down Telegram bot gracefully...`
                );
                try {
                    await this.stop();
                    elizaLogger.log("🛑 Telegram bot stopped gracefully");
                } catch (error) {
                    elizaLogger.error(
                        "❌ Error during Telegram bot shutdown:",
                        error
                    );
                    throw error;
                }
            };

            process.once("SIGINT", () => shutdownHandler("SIGINT"));
            process.once("SIGTERM", () => shutdownHandler("SIGTERM"));
            process.once("SIGHUP", () => shutdownHandler("SIGHUP"));
        } catch (error) {
            elizaLogger.error("❌ Failed to launch Telegram bot:", error);
            throw error;
        }
    }

    public async stop(): Promise<void> {
        elizaLogger.log("Stopping Telegram bot...");
        await this.bot.stop();
        elizaLogger.log("Telegram bot stopped");
    }
}