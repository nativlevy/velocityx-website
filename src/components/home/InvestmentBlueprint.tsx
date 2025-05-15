import React from 'react';
import ReactMarkdown from 'react-markdown';

const blueprintContent = `### Why Data?

Data is the new gold, and for good reason. The data sector presents a unique opportunity for rapid growth, driven by escalating market demand and cross-industry relevance. As data becomes increasingly central to technological innovation, the need for advanced solutions in data management, processing, and analysis grows exponentially.

Our investment strategy is aligned with this trend, focusing on ventures that harness the transformative potential of data. We aim to fill a critical gap in the market by specializing in data-centric investments, positioning ourselves as the go-to venture capital firm for the data economy.

### Data

1. **AI, ML, and LLM Optimization**: Investing in advancements that optimize artificial intelligence, machine learning, and large language models (LLMs), enhancing their performance and applicability across industries.
2. **Data Engineering, Architecture & Infrastructure**: Investing in the future of data management, focusing on how data is structured, processed, and maintained to meet the demands of modern applications.
3. **User-Centric Data Solutions**: Backing tools and technologies that empower everyday users to manage and derive insights from data, making complex data analytics accessible and actionable.
4. **Data Operations & Governance**: Supporting innovations in data operations, with a focus on enhancing security, governance, and privacy to meet regulatory and business needs.

---

### Infrastructure & DevTools: Building the Next Frontier

In every gold rush, those who provide the tools often profit the most. We are on the lookout for visionary founders who are building the "picks and shovels" for the next revolution in infrastructure and DevTools-what we might call Software Engineering 2.0.

While AI has already begun to transform industries, the evolution of software engineering is far from complete. The opportunities to enhance and streamline the work that developers do extend beyond just writing code. This includes everything from debugging and documentation to incident response and performance optimization.

We are particularly interested in solutions that rethink traditional tools, offering new value propositions such as more secure or performant code, or entirely new applications that enhance workflows for not just software engineers but also data scientists, analysts, and other technical personas.

As coding and computing become increasingly complex and distributed, new technologies will be needed to manage these challenges effectively, ensuring projects run smoothly in these demanding environments. We are committed to investing in the tools and platforms that will drive this next wave of innovation in software engineering.

### Infrastructure & DevOps

1. **Cloud to Code Integration**: Tools and frameworks that seamlessly integrate cloud capabilities into the development process, enabling real-time production-level coding.
2. **Empowering Leaner Teams**: Solutions that enable streamlined, efficient teams—including engineers, PMs, DevRel, and architects—to move faster and be more effective with the right tools.
3. **Low Code/No Code Development**: Platforms that democratize software development by allowing non-developers to create and deploy applications more easily and quickly.
4. **Microservices Architecture**: Scalable, flexible microservices architectures that simplify the development, deployment, and maintenance of complex software systems.
5. **Outsourcing Solutions Amid Skill Shortages**: Addressing the global shortage of IT and engineering talent by investing in advanced outsourcing solutions and resource management technologies.
6. **DevSecOps Integration**: Supporting the next wave of software development that integrates security practices throughout the entire IT lifecycle, combining development, security, and operations in a unified approach.`;

const InvestmentBlueprint: React.FC = () => {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{blueprintContent}</ReactMarkdown>
    </div>
  );
};

export default InvestmentBlueprint;