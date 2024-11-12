/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "🚀 Introduction",
    },
    {
      type: "category",
      label: "🏁 Getting Started",
      items: ["quickstart"],  // Consolidated installation into quickstart
      collapsed: false,
    },
    {
      type: "category",
      label: "🧠 Core Concepts",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "core/characterfile",
          label: "📝 Character Files"
        },
        {
          type: "doc",
          id: "core/agents",
          label: "🤖 Agents"
        },
        {
          type: "doc",
          id: "core/providers",
          label: "🔌 Providers"
        },
        {
          type: "doc",
          id: "core/actions",
          label: "⚡ Actions"
        },
        {
          type: "doc",
          id: "core/evaluators",
          label: "📊 Evaluators"
        },
      ],
    },
    {
      type: "category",
      label: "📘 Guides",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "guides/configuration",
          label: "⚙️ Configuration"
        },
        {
          type: "doc",
          id: "guides/advanced",
          label: "🔧 Advanced Usage"
        },
        {
          type: "doc",
          id: "guides/secrets-management",
          label: "🔐 Secrets Management"
        },
        {
          type: "doc",
          id: "guides/local-development",
          label: "💻 Local Development"
        },
      ],
    },
    {
      type: "category",
      label: "🎓 Advanced Topics",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "advanced/fine-tuning",
          label: "🎯 Fine-tuning"
        },
        {
          type: "doc",
          id: "advanced/infrastructure",
          label: "🏗️ Infrastructure"
        },
        {
          type: "doc",
          id: "advanced/trust-engine",
          label: "🤝 Trust Engine"
        },
        {
          type: "doc",
          id: "advanced/autonomous-trading",
          label: "📈 Autonomous Trading"
        },
      ],
    },
    {
      type: "category",
      label: "👥 Community",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "community/creator-fund",
          label: "💰 Creator Fund"
        },
        {
          type: "doc",
          id: "community/stream-notes",
          label: "📺 Stream Notes"
        },
        {
          type: "doc",
          id: "community/changelog",
          label: "📝 Changelog"
        },
        {
          type: "doc",
          id: "community/faq",
          label: "❓ FAQ"
        },
        {
          type: "doc",
          id: "community/contributing",
          label: "🤝 Contributing"
        },
      ],
    },
  ],
};

export default sidebars;
