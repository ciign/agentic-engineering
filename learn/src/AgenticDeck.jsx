import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Terminal, Cloud, Zap, Code, Shield, CheckCircle, GitBranch } from 'lucide-react'

const slides = [
  {
    id: 'title',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <img src="/logo.png" alt="Agentic Engineering" className="w-48 h-48 mb-6" />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Agentic Engineering</h1>
        <h2 className="text-2xl text-gray-600 mb-6">12 Specialized AI Agents for Software Development</h2>
        <p className="text-xl text-blue-600 mb-8">Worker-Governance Pattern</p>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-500 font-mono">github.com/ciign/agentic-engineering</p>
        </div>
      </div>
    )
  },
  {
    id: 'problem',
    content: (
      <div className="h-full p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">The Problem</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
            <h3 className="text-2xl font-bold text-red-700 mb-4">Traditional Development</h3>
            <div className="text-5xl font-bold text-red-600 mb-2">Weeks</div>
            <p className="text-gray-600">to ship features</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li>* Context switching between tasks</li>
              <li>* Manual code review cycles</li>
              <li>* Security as afterthought</li>
              <li>* Tests written last (or never)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Agentic Engineering</h3>
            <div className="text-5xl font-bold text-green-600 mb-2">Days</div>
            <p className="text-gray-600">to ship features</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li>* Specialized agents per task</li>
              <li>* Built-in quality gates</li>
              <li>* Security-first approach</li>
              <li>* Tests alongside code</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-2xl font-bold text-blue-600">10x faster delivery with AI agents</div>
      </div>
    )
  },
  {
    id: 'pattern',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">The Worker-Governance Pattern</h2>
        <p className="text-xl text-gray-600 mb-6 italic">"Equal halves make the whole, neither side takes control."</p>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-300">
            <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6" /> 6 Worker Agents
            </h3>
            <p className="text-gray-600 mb-4">Sensing - Practical Execution</p>
            <ul className="space-y-2 text-gray-700">
              <li>* Build features</li>
              <li>* Fix bugs</li>
              <li>* Implement designs</li>
              <li>* Deploy infrastructure</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" /> 6 Governance Agents
            </h3>
            <p className="text-gray-600 mb-4">Direction & Quality</p>
            <ul className="space-y-2 text-gray-700">
              <li>* Define requirements</li>
              <li>* Design architecture</li>
              <li>* Review code quality</li>
              <li>* Validate security</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-lg text-gray-600">
          Based on <span className="font-bold">Jungian cognitive functions</span> for balanced team dynamics
        </div>
      </div>
    )
  },
  {
    id: 'agents-workers',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Worker Agents (Execution)</h2>
        <p className="text-gray-600 mb-6">Cognitive Function: <span className="font-bold text-orange-600">Sensing</span> - Practical, detail-oriented</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'backend-specialist', desc: 'APIs, databases, server-side logic', color: 'blue' },
            { name: 'frontend-specialist', desc: 'UI/UX implementation, accessibility', color: 'green' },
            { name: 'database-designer', desc: 'Schema design, query optimization', color: 'amber' },
            { name: 'devops-engineer', desc: 'CI/CD, infrastructure, deployment', color: 'cyan' },
            { name: 'full-stack-developer', desc: 'End-to-end feature implementation', color: 'purple' },
            { name: 'debugger', desc: 'Bug diagnosis, root cause analysis', color: 'orange' },
          ].map(a => (
            <div key={a.name} className={`bg-${a.color}-50 p-4 rounded-lg border-l-4 border-${a.color}-500`}>
              <div className="font-mono font-bold text-gray-800">@{a.name}</div>
              <div className="text-sm text-gray-600">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'agents-governance',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Governance Agents (Quality & Direction)</h2>
        <p className="text-gray-600 mb-6">Cognitive Functions: <span className="font-bold text-purple-600">Intuition</span> + <span className="font-bold text-red-600">Thinking</span> + <span className="font-bold text-pink-600">Feeling</span></p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'product-owner', desc: 'Requirements, priorities, user stories', color: 'teal', fn: 'Intuition + Feeling' },
            { name: 'system-architect', desc: 'Architecture, patterns, scalability', color: 'fuchsia', fn: 'Intuition' },
            { name: 'ux-designer', desc: 'User experience, accessibility', color: 'pink', fn: 'Feeling' },
            { name: 'code-reviewer', desc: 'Code quality, maintainability', color: 'red', fn: 'Thinking' },
            { name: 'security-auditor', desc: 'Vulnerabilities, compliance', color: 'rose', fn: 'Thinking' },
            { name: 'test-writer', desc: 'Testing strategy, coverage', color: 'yellow', fn: 'Thinking' },
          ].map(a => (
            <div key={a.name} className={`bg-gray-50 p-4 rounded-lg border-l-4 border-${a.color}-500`}>
              <div className="font-mono font-bold text-gray-800">@{a.name}</div>
              <div className="text-sm text-gray-600">{a.desc}</div>
              <div className="text-xs text-gray-400 mt-1">{a.fn}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'install',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Quick Start</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono">
            <p className="text-gray-500"># One-line install (supports Claude Code & OpenCode)</p>
            <p className="text-lg">curl -sSL https://raw.githubusercontent.com/</p>
            <p className="text-lg">  ciign/agentic-engineering/main/setup-agents.sh | bash</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-700 mb-2">Claude Code</h3>
              <p className="text-gray-600 text-sm">Anthropic's official CLI</p>
              <code className="text-xs text-gray-500">claude.ai/claude-code</code>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-700 mb-2">OpenCode</h3>
              <p className="text-gray-600 text-sm">Open-source AI coding agent</p>
              <code className="text-xs text-gray-500">opencode.ai</code>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="font-bold text-yellow-800">Pro tip:</p>
            <p className="text-yellow-700">Use @agent-name to invoke any specialized agent</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'workflow',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">The Agentic Workflow</h2>
        <div className="flex flex-col gap-4">
          {[
            { num: '1', phase: 'VISION', agents: '@product-owner @ux-designer', task: 'Define what to build', color: 'purple' },
            { num: '2', phase: 'ARCHITECTURE', agents: '@system-architect @database-designer', task: 'Design how to build it', color: 'blue' },
            { num: '3', phase: 'EXECUTION', agents: '@backend-specialist @frontend-specialist @devops-engineer', task: 'Build & deploy', color: 'green' },
            { num: '4', phase: 'QUALITY', agents: '@code-reviewer @security-auditor @test-writer', task: 'Validate & secure', color: 'red' },
          ].map((step) => (
            <div key={step.num} className={`flex items-center gap-4 p-4 rounded-lg bg-${step.color}-50 border-l-4 border-${step.color}-500`}>
              <div className={`w-12 h-12 rounded-full bg-${step.color}-500 text-white flex items-center justify-center text-xl font-bold`}>
                {step.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">{step.phase}</span>
                  <span className="text-gray-400">-</span>
                  <span className="text-gray-600">{step.task}</span>
                </div>
                <code className="text-sm text-gray-500">{step.agents}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'example-1',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Example: Building a Feature</h2>
        <p className="text-gray-600 mb-6">Step 1: Define Requirements</p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm space-y-4">
          <div>
            <p className="text-gray-500"># Start your AI coding tool</p>
            <p>$ claude <span className="text-gray-500"># or: opencode</span></p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-blue-400">You:</p>
            <p>@product-owner define MVP scope for a task management API</p>
            <p>with CRUD operations, user auth, and due dates</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-purple-400">@product-owner:</p>
            <p className="text-gray-300">Here's the MVP scope with user stories:</p>
            <p className="text-gray-300">- As a user, I want to create tasks...</p>
            <p className="text-gray-300">- As a user, I want to set due dates...</p>
            <p className="text-gray-300">[Acceptance criteria for each]</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'example-2',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Example: Architecture & Build</h2>
        <p className="text-gray-600 mb-6">Steps 2-3: Design and Implement</p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm space-y-4">
          <div>
            <p className="text-blue-400">You:</p>
            <p>@system-architect design architecture for FastAPI + PostgreSQL</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-fuchsia-400">@system-architect:</p>
            <p className="text-gray-300">Recommended architecture:</p>
            <p className="text-gray-300">app/</p>
            <p className="text-gray-300">  |-- api/ (routes)</p>
            <p className="text-gray-300">  |-- models/ (SQLAlchemy)</p>
            <p className="text-gray-300">  |-- services/ (business logic)</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-blue-400">You:</p>
            <p>@backend-specialist implement the task CRUD API</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-cyan-400">@backend-specialist:</p>
            <p className="text-yellow-400">[OK] Created app/main.py</p>
            <p className="text-yellow-400">[OK] Created app/api/tasks.py</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'example-3',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Example: Quality Gates</h2>
        <p className="text-gray-600 mb-6">Step 4: Validate Before Ship</p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm space-y-4">
          <div>
            <p className="text-blue-400">You:</p>
            <p>@security-auditor review the auth implementation</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-red-400">@security-auditor:</p>
            <p className="text-gray-300">[CRITICAL] JWT secret hardcoded in code</p>
            <p className="text-gray-300">[IMPORTANT] Add rate limiting to /login</p>
            <p className="text-gray-300">[SUGGESTION] Consider refresh tokens</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-blue-400">You:</p>
            <p>@test-writer create tests for the task endpoints</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-yellow-400">@test-writer:</p>
            <p className="text-yellow-400">[OK] Created tests/test_tasks.py (12 tests)</p>
            <p className="text-gray-300">Coverage: 87% of task API</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'balance',
    content: (
      <div className="h-full p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Why This Pattern Works</h2>
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: 'Vision + Execution', desc: 'Workers build what governance defines' },
            { title: 'Quality + Velocity', desc: 'Built-in review without bottlenecks' },
            { title: 'Innovation + Stability', desc: 'New ideas grounded in best practices' },
            { title: 'User Needs + Tech Excellence', desc: 'Empathy balanced with objectivity' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-600 italic">"Neither half is complete alone."</p>
          <p className="text-gray-500 mt-2">Workers without governance build the wrong things efficiently.</p>
          <p className="text-gray-500">Governance without workers produces plans that never ship.</p>
        </div>
      </div>
    )
  },
  {
    id: 'resources',
    content: (
      <div className="h-full p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Resources</h2>
        <div className="grid grid-cols-1 gap-4 mb-8">
          {[
            { title: 'Agentic Engineering Repo', url: 'github.com/ciign/agentic-engineering' },
            { title: 'Claude Code Docs', url: 'docs.anthropic.com/claude-code' },
            { title: 'OpenCode Docs', url: 'opencode.ai/docs' },
            { title: 'Team Architecture Guide', url: 'TEAM_ARCHITECTURE.md in the repo' },
          ].map((r, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <span className="font-bold text-gray-800">{r.title}</span>
              <span className="font-mono text-blue-600 text-sm">{r.url}</span>
            </div>
          ))}
        </div>
        <div className="p-6 bg-gray-900 text-white rounded-xl">
          <p className="text-xl mb-4">Get Started Now</p>
          <code className="text-green-400 block">curl -sSL https://raw.githubusercontent.com/ciign/agentic-engineering/main/setup-agents.sh | bash</code>
        </div>
      </div>
    )
  },
  {
    id: 'thanks',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <img src="/logo.png" alt="Agentic Engineering" className="w-32 h-32 mb-6" />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Ship Fast, Ship Smart</h2>
        <p className="text-2xl text-gray-600 mb-8">12 agents. 1 workflow. Better software.</p>
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <p className="text-lg font-mono text-gray-700">@product-owner -&gt; @system-architect -&gt;</p>
          <p className="text-lg font-mono text-gray-700">@backend-specialist -&gt; @devops-engineer -&gt;</p>
          <p className="text-lg font-mono text-gray-700">@security-auditor -&gt; @test-writer -&gt; Ship!</p>
        </div>
        <div className="text-gray-500">
          <p className="font-mono">github.com/ciign/agentic-engineering</p>
        </div>
      </div>
    )
  }
]

export default function AgenticDeck() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent(c => Math.min(c + 1, slides.length - 1))
  const prev = () => setCurrent(c => Math.max(c - 1, 0))

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <div className="flex-1 overflow-hidden">
        {slides[current].content}
      </div>
      <div className="h-16 bg-gray-100 flex items-center justify-between px-6 border-t">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" /> Prev
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="text-center text-sm text-gray-400 py-2">
        {current + 1} / {slides.length} | Use arrow keys to navigate
      </div>
    </div>
  )
}
