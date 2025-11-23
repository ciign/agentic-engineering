# Agentic Engineering 🤖

<div align="center">

**A psychologically-balanced team of 12 specialized AI agents for software development with Claude Code.**

*Based on **Jungian cognitive functions** to create optimal team dynamics for motivation, innovation, and delivery.*

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![Claude Code](https://img.shields.io/badge/Claude-Code-blueviolet)](https://www.claude.com/product/claude-code)

</div>

---

## 🧠 The Philosophy: The Worker-Governance Pattern

> ### **Agentic Pattern: The Worker-Governance Pattern**
>
> *"Equal Halves make the whole, neither side takes control."*

This agent system is built on **Carl Jung's cognitive functions** to create a psychologically balanced team:

<table>
<tr>
<td width="50%" valign="top">

### 🔧 **WORKER AGENTS** (6)
**Cognitive Function: Sensing**

🔵 **Practical Execution**
🔵 **Detail-Oriented**
🔵 **Present-Focused**
🔵 **Implementation**

**Role:** Build features, fix bugs, execute tasks

</td>
<td width="50%" valign="top">

### 🏛️ **GOVERNANCE AGENTS** (6)
**Cognitive Functions: Mixed**

💜 **Strategic Direction** (Intuition)
🔴 **Quality Validation** (Thinking)
🩷 **User Empathy** (Feeling)

**Role:** Guide vision, ensure quality, validate work

</td>
</tr>
</table>

### The Balance:
```
6 Workers (Sensing)    +    6 Governance (Intuition + Thinking + Feeling)    =    12 Agents
   ⚙️ Execution               🎯 Direction & Quality                            🎯 Complete Team
```

**This balance ensures:**
- ✅ **Vision** without losing touch with reality
- ✅ **Quality** without perfectionism paralysis
- ✅ **Execution** with strategic direction
- ✅ **Empathy** balanced with objectivity
- ✅ **Neither side dominates** - equal collaboration

📖 **See [TEAM_ARCHITECTURE.md](TEAM_ARCHITECTURE.md) for detailed team dynamics and collaboration patterns**

---

<div align="center">
<img width="944" height="459" alt="Screenshot 2025-11-22 at 9 13 09 PM" src="https://github.com/user-attachments/assets/27576106-8345-4542-b7c3-ffb09893d7f2" />

### 🎯 The Pattern in Action

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│     WORKERS (6)                 BALANCE                GOVERNANCE (6)   │
│  ═══════════════                                         ═══════════════│
│                                                                         │
│  🔵 Backend Specialist       ←─────────────→       💜 System Architect   │
│  🟢 Frontend Specialist      ←─────────────→       🩷 UX Designer        │
│  🟤 Database Designer        ←─────────────→       🩵 Product Owner      │
│  🩵 DevOps Engineer          ←─────────────→       🔴 Code Reviewer      │
│  🟣 Full-Stack Developer     ←─────────────→       🔴 Security Auditor   │
│  🟠 Debugger                 ←─────────────→       🟡 Test Writer        │
│                                                                         │
│            EXECUTION                                    DIRECTION       │
│            Implementation                               Validation      │
│            Practical                                    Strategic       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

*Neither side takes control. Equal halves make the whole.*

</div>

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/ciign/agentic-engineering.git
cd agentic-engineering

# Run the setup script in your project directory
./setup-claude-agents.sh

# Start Claude Code from your project directory
claude
```

The script will:
- ✅ Copy `.claude-template/` to your project's `.claude/` directory
- ✅ Back up any existing `.claude/` directory
- ✅ Show you the team structure and usage tips

### One-Line Install (from anywhere)

```bash
curl -sSL https://raw.githubusercontent.com/ciign/agentic-engineering/main/setup-claude-agents.sh | bash
```

## 👥 The Team: 6 + 6 Balance

### 🔧 Worker Agents (Sensing - Execution)

These agents **build** features through practical, detail-oriented implementation:

| Agent | Color | Focus | Cognitive Function |
|-------|-------|-------|-------------------|
| **backend-specialist** | 🔵 Blue | Server-side APIs, databases, performance | Sensing |
| **frontend-specialist** | 🟢 Green | UI implementation, accessibility, client-side | Sensing |
| **database-designer** | 🟤 Brown | Schema design, query optimization, data modeling | Sensing |
| **devops-engineer** | 🩵 Cyan | CI/CD, infrastructure, deployment, monitoring | Sensing |
| **full-stack-developer** | 🟣 Purple | End-to-end features across all layers | Sensing |
| **debugger** | 🟠 Orange | Bug diagnosis, root cause analysis, fixes | Sensing |

### 🏛️ Governance Agents (Direction & Quality)

These agents **guide** and **validate** work:

#### Vision & Strategy (Intuition)
| Agent | Color | Focus | Cognitive Function |
|-------|-------|-------|-------------------|
| **product-owner** | 🩵 Teal | Requirements, priorities, business value | Intuition + Feeling |
| **system-architect** | 💜 Magenta | Technical architecture, patterns, scalability | Intuition |

#### Quality Assurance (Thinking)
| Agent | Color | Focus | Cognitive Function |
|-------|-------|-------|-------------------|
| **code-reviewer** | 🔴 Red | Code quality, maintainability, standards | Thinking |
| **security-auditor** | 🔴 Red | Vulnerabilities, compliance, security | Thinking |
| **test-writer** | 🟡 Yellow | Testing strategy, coverage, validation | Thinking |

#### User Empathy (Feeling)
| Agent | Color | Focus | Cognitive Function |
|-------|-------|-------|-------------------|
| **ux-designer** | 🩷 Pink | User research, accessibility, experience | Feeling |

## 💡 How to Use the Agents

### Understanding Agent Types & Agent Philosophy

<img width="944" height="459" alt="Screenshot 2025-11-22 at 9 13 09 PM" src="https://github.com/user-attachments/assets/27576106-8345-4542-b7c3-ffb09893d7f2" />


**Worker Agents** → Execute tasks, build features, fix bugs
```bash
@backend-specialist implement user authentication API
@frontend-specialist create a responsive dashboard
@debugger fix this race condition
```

**Governance Agents** → Define direction, ensure quality, validate work
```bash
@product-owner what features should we prioritize for MVP?
@system-architect should we use microservices or monolith?
@code-reviewer review this authentication implementation
@ux-designer is this checkout flow intuitive?
```

### Complete Workflow Examples

#### 🆕 Building a New Feature

```bash
# 1. Define what to build (Vision)
@product-owner I want to add real-time notifications
# → Defines requirements, user stories, acceptance criteria

# 2. Design the experience (Empathy)
@ux-designer design the notification UI/UX
# → Creates user flows, interaction patterns

# 3. Design the architecture (Vision)
@system-architect design the real-time notification system
# → Defines technical approach (WebSockets, polling, etc.)

# 4. Build it (Execution)
@backend-specialist implement WebSocket notification service
@frontend-specialist implement notification UI components
# → Worker agents build the feature

# 5. Validate quality (Quality)
@code-reviewer review the notification implementation
@security-auditor check for security issues
@test-writer add comprehensive tests
# → Governance agents ensure quality
```

#### 🐛 Debugging & Fixing Issues

```bash
# 1. Diagnose and fix (Execution)
@debugger users report intermittent login failures
# → Investigates, identifies root cause, implements fix

# 2. Validate the fix (Quality)
@test-writer add regression tests for the login fix
@code-reviewer review the debugging fix
# → Ensures fix is correct and won't regress
```

#### 🏗️ Starting a New Project

```bash
# 1. Define vision and requirements (Vision + Empathy)
@product-owner define MVP scope for task management app
@ux-designer research task management user needs

# 2. Design architecture (Vision)
@system-architect design scalable architecture for task app
@database-designer design data model for tasks and users

# 3. Execute implementation (Execution)
@full-stack-developer implement core task CRUD features
@devops-engineer set up CI/CD pipeline

# 4. Ensure quality (Quality)
@security-auditor review authentication and authorization
@test-writer create comprehensive test suite
@code-reviewer final review before deployment
```

#### 🚀 Deploying to Production

```bash
# 1. Prepare infrastructure (Execution)
@devops-engineer set up production infrastructure on AWS

# 2. Security audit (Quality)
@security-auditor perform pre-deployment security review

# 3. Architecture validation (Vision)
@system-architect review production architecture for scalability

# 4. Final checks
@code-reviewer verify deployment configuration
```

### Agent Collaboration Patterns

**Product Development Flow:**
```
product-owner → ux-designer → system-architect → worker agents → governance agents
(what to build) (how users use it) (how to build it) (build it) (validate it)
```

**Technical Decision Making:**
```
system-architect ←→ worker agents ←→ governance agents
(provides patterns)  (implements)    (validates quality)
```

**Quality Assurance:**
```
worker agents → code-reviewer → security-auditor → test-writer
(submit work)   (code quality)   (security)       (testing)
```

## 📁 Project Structure

After running the setup script:

```
your-project/
├── .claude/
│   └── agents/
│       ├── backend-specialist.md
│       ├── frontend-specialist.md
│       ├── database-designer.md
│       ├── devops-engineer.md
│       ├── full-stack-developer.md
│       ├── debugger.md
│       ├── product-owner.md
│       ├── ux-designer.md
│       ├── system-architect.md
│       ├── code-reviewer.md
│       ├── security-auditor.md
│       └── test-writer.md
└── [your project files]
```

## 🎯 When to Use Which Agent

### "What should we build?"
- **@product-owner** - Requirements, priorities, business value
- **@ux-designer** - User needs, experience design

### "How should we structure it?"
- **@system-architect** - Architecture, patterns, scalability
- **@database-designer** - Data models, schema design

### "Build the feature"
- **@backend-specialist** - APIs, business logic, server-side
- **@frontend-specialist** - UI, components, client-side
- **@full-stack-developer** - Complete features end-to-end
- **@database-designer** - Schemas, queries, migrations
- **@devops-engineer** - Infrastructure, deployment

### "Fix the bug"
- **@debugger** - Diagnose and fix issues

### "Is it good quality?"
- **@code-reviewer** - Code quality, maintainability
- **@security-auditor** - Security vulnerabilities
- **@test-writer** - Test coverage, validation
- **@ux-designer** - Usability, accessibility

## 🎓 Agent Capabilities Deep Dive

### Worker Agents (Sensing)

Each worker agent embodies **practical, detail-oriented execution**:

**backend-specialist**
- API design (REST, GraphQL, gRPC, WebSockets)
- Database optimization and query tuning
- Authentication, authorization, session management
- Caching strategies, message queues
- Performance profiling and optimization

**frontend-specialist**
- Modern frameworks (React, Vue, Angular, Svelte)
- Responsive design, mobile-first approach
- Accessibility (WCAG AA/AAA compliance)
- Performance optimization (lazy loading, code splitting)
- State management patterns

**database-designer**
- Schema design and normalization
- Index optimization strategies
- Query performance tuning
- Migration planning (zero-downtime)
- Scaling strategies (sharding, partitioning)

**devops-engineer**
- CI/CD pipelines (GitHub Actions, GitLab CI)
- Infrastructure as Code (Terraform, CloudFormation)
- Container orchestration (Docker, Kubernetes)
- Monitoring and observability (Prometheus, Grafana)
- Security best practices for infrastructure

**full-stack-developer**
- End-to-end feature implementation
- Cross-layer integration (UI → API → DB)
- Holistic problem-solving
- Full ownership of features

**debugger**
- Systematic debugging methodology
- Root cause analysis
- Performance profiling
- Log analysis and tracing
- Bug prevention strategies

### Governance Agents

**product-owner** (Intuition + Feeling)
- Product vision and strategy
- Requirements gathering (user stories, acceptance criteria)
- Backlog prioritization (RICE, MoSCoW, Value/Effort)
- Stakeholder alignment
- Metrics and OKRs

**ux-designer** (Feeling)
- User research and personas
- Information architecture
- Interaction design and prototyping
- Accessibility and inclusive design
- Usability testing

**system-architect** (Intuition)
- Scalable system design
- Architectural patterns (microservices, event-driven, etc.)
- Technology selection and tradeoffs
- Performance and reliability planning
- Architectural Decision Records (ADRs)

**code-reviewer** (Thinking)
- Code correctness and logic
- Security vulnerability detection
- Performance analysis
- Maintainability assessment
- Constructive feedback

**security-auditor** (Thinking)
- OWASP Top 10 vulnerability detection
- Threat modeling
- Security best practices (authentication, encryption, etc.)
- Compliance (GDPR, SOC2, HIPAA)
- Penetration testing mindset

**test-writer** (Thinking)
- Test strategy (unit, integration, E2E)
- Test-driven development (TDD)
- Coverage analysis
- Test maintainability
- Continuous testing practices

## 🛠️ Requirements

- [Claude Code](https://www.claude.com/product/claude-code) installed
- Bash (for the setup script) - works on:
  - macOS
  - Linux
  - Windows (Git Bash, WSL, or Cygwin)

## 📖 Additional Resources

- **[TEAM_ARCHITECTURE.md](TEAM_ARCHITECTURE.md)** - Detailed team dynamics, Jungian cognitive functions, and collaboration patterns with visual diagrams
- **[Claude Code Documentation](https://www.claude.com/product/claude-code)** - Official Claude Code docs
- **Individual Agent Files** - Each agent's `.md` file contains their philosophy, approach, and expertise

## 🎨 Design Philosophy

This agent system is designed around **psychological balance**:

1. **Sensing (6 workers)** → Practical execution, present-focused, detail-oriented
2. **Intuition (2 governance)** → Vision, patterns, future-oriented, strategic
3. **Thinking (3 governance)** → Logical analysis, objective validation, standards
4. **Feeling (1 governance)** → Empathy, values, user needs, human-centered

This creates:
- **Balance** between vision and execution
- **Balance** between quality and velocity
- **Balance** between user needs and technical constraints
- **Balance** between innovation and stability

## 🤝 Contributing

Contributions are welcome! When proposing new agents, consider:

1. **Team balance** - Would this agent maintain the 6/6 worker/governance balance?
2. **Cognitive function** - What Jungian function does it embody?
3. **Unique value** - What unique expertise does it provide?
4. **Collaboration** - How does it work with existing agents?

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-capability`)
3. Update agents in `.claude-template/agents/`
4. Test thoroughly
5. Update documentation (README, TEAM_ARCHITECTURE.md)
6. Submit a Pull Request

### Ideas for Enhancements

- **Industry-specific agents** (FinTech, Healthcare, E-commerce)
- **Language-specific specialists** (Python, Go, Rust, TypeScript)
- **Platform-specific agents** (Mobile, Desktop, Embedded)
- **Advanced capabilities** (AI/ML, Data Engineering, Performance Optimization)

## 📄 License

This project is released into the public domain under The Unlicense.

You can:
- ✅ Use commercially
- ✅ Modify freely
- ✅ Distribute
- ✅ Use privately
- ❌ No attribution required
- ❌ No warranty provided

See the [LICENSE](LICENSE) file for details or visit [unlicense.org](https://unlicense.org).

## 🙏 Acknowledgments

- Built for use with [Claude Code](https://www.claude.com/product/claude-code)
- Based on Carl Jung's theory of cognitive functions
- Inspired by best practices from high-performing software teams
- Community contributions and feedback

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/ciign/agentic-engineering/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ciign/agentic-engineering/discussions)
- **Documentation**: [Claude Code Docs](https://www.claude.com/product/claude-code)

## 🌟 Star History

If you find this useful, please give it a star! ⭐

Stars help others discover this project and motivate continued development.

---

**Made with ❤️ for the developer community**

*Experience the power of a psychologically-balanced AI engineering team! 🚀*
