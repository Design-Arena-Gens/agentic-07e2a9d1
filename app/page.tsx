export default function Home() {
  const frameworks = [
    {
      name: "LangGraph",
      subtitle: "Por LangChain",
      icon: "🔗",
      description: "Framework basado en grafos para construir agentes con estados complejos y flujos de trabajo multi-paso. Excelente para orquestar agentes con memoria y herramientas.",
      pros: [
        "Control granular del flujo",
        "Excelente para workflows complejos",
        "Integración con LangChain",
        "Manejo de estados robusto"
      ],
      cons: [
        "Curva de aprendizaje empinada",
        "Puede ser excesivo para casos simples",
        "Documentación en evolución"
      ],
      useCases: [
        "Agentes multi-paso con memoria",
        "Workflows de decisión complejos",
        "Sistemas de RAG avanzados"
      ],
      rating: 5
    },
    {
      name: "Claude Agent SDK",
      subtitle: "Por Anthropic",
      icon: "🤖",
      description: "SDK oficial de Anthropic para construir agentes con Claude. Diseñado específicamente para aprovechar las capacidades de razonamiento y uso de herramientas de Claude.",
      pros: [
        "Optimizado para Claude",
        "Manejo nativo de herramientas",
        "Excelente documentación",
        "Integración directa con la API"
      ],
      cons: [
        "Limitado a Claude",
        "Menos flexible que otros frameworks",
        "Comunidad más pequeña"
      ],
      useCases: [
        "Aplicaciones CLI inteligentes",
        "Automatización de tareas",
        "Asistentes de código"
      ],
      rating: 5
    },
    {
      name: "AutoGPT",
      subtitle: "Agentes Autónomos",
      icon: "🚀",
      description: "Framework para crear agentes completamente autónomos que pueden descomponer objetivos y ejecutar tareas de forma independiente con mínima supervisión.",
      pros: [
        "Alta autonomía",
        "Descomposición automática de tareas",
        "Muy innovador",
        "Gran comunidad"
      ],
      cons: [
        "Puede ser impredecible",
        "Costos elevados en tokens",
        "Requiere supervisión"
      ],
      useCases: [
        "Investigación automatizada",
        "Generación de contenido masivo",
        "Prototipado rápido"
      ],
      rating: 4
    },
    {
      name: "CrewAI",
      subtitle: "Equipos de Agentes",
      icon: "👥",
      description: "Framework para crear equipos de agentes especializados que colaboran entre sí. Cada agente tiene un rol específico y trabajan juntos para completar tareas complejas.",
      pros: [
        "Colaboración entre agentes",
        "Roles bien definidos",
        "Fácil de usar",
        "Ideal para tareas complejas"
      ],
      cons: [
        "Overhead de coordinación",
        "Costos más altos",
        "Puede ser lento"
      ],
      useCases: [
        "Análisis multi-perspectiva",
        "Desarrollo de software colaborativo",
        "Investigación en equipo"
      ],
      rating: 4
    },
    {
      name: "LangChain Agents",
      subtitle: "Por LangChain",
      icon: "⚡",
      description: "Sistema de agentes integrado en LangChain. Flexible y bien establecido, con muchas herramientas y integraciones disponibles.",
      pros: [
        "Ecosistema maduro",
        "Muchas integraciones",
        "Documentación extensa",
        "Comunidad activa"
      ],
      cons: [
        "Abstracciones complejas",
        "A veces verboso",
        "Cambios frecuentes en API"
      ],
      useCases: [
        "Chatbots con herramientas",
        "Asistentes personales",
        "Automatización empresarial"
      ],
      rating: 4
    },
    {
      name: "Microsoft Semantic Kernel",
      subtitle: "Por Microsoft",
      icon: "🔷",
      description: "SDK empresarial de Microsoft para integrar LLMs en aplicaciones. Enfoque en plugins y orquestación de funciones con fuerte tipado.",
      pros: [
        "Soporte empresarial",
        "Multi-lenguaje (C#, Python, Java)",
        "Integraciones Azure",
        "Tipado fuerte"
      ],
      cons: [
        "Más complejo para comenzar",
        "Ecosistema Microsoft-céntrico",
        "Menos flexible"
      ],
      useCases: [
        "Aplicaciones empresariales",
        "Integraciones Azure/Microsoft",
        "Sistemas críticos de negocio"
      ],
      rating: 4
    },
    {
      name: "OpenAI Assistants API",
      subtitle: "Por OpenAI",
      icon: "🔮",
      description: "API de asistentes de OpenAI con herramientas nativas (Code Interpreter, Retrieval). Solución serverless y fácil de usar.",
      pros: [
        "Serverless y simple",
        "Herramientas integradas",
        "Manejo de estado automático",
        "Buena para MVPs"
      ],
      cons: [
        "Menos control",
        "Limitado a OpenAI",
        "Puede ser costoso",
        "Vendor lock-in"
      ],
      useCases: [
        "Chatbots RAG",
        "Asistentes con código",
        "Prototipos rápidos"
      ],
      rating: 4
    },
    {
      name: "Haystack",
      subtitle: "Por deepset",
      icon: "🌾",
      description: "Framework orientado a búsqueda y NLP con capacidades de agentes. Excelente para sistemas de recuperación de información y pipelines de NLP.",
      pros: [
        "Enfoque en búsqueda/RAG",
        "Pipelines modulares",
        "Evaluación integrada",
        "Production-ready"
      ],
      cons: [
        "Menos enfocado en agentes",
        "Documentación compleja",
        "Setup inicial largo"
      ],
      useCases: [
        "Sistemas RAG empresariales",
        "Búsqueda semántica",
        "Q&A sobre documentos"
      ],
      rating: 4
    },
    {
      name: "Agents from Scratch",
      subtitle: "Custom Implementation",
      icon: "🛠️",
      description: "Construir tu propio sistema de agentes usando APIs directamente (OpenAI, Anthropic, etc). Máximo control y flexibilidad.",
      pros: [
        "Control total",
        "Sin dependencias extras",
        "Optimizable al máximo",
        "Aprendizaje profundo"
      ],
      cons: [
        "Mucho trabajo inicial",
        "Tienes que resolver todo",
        "Mantenimiento constante"
      ],
      useCases: [
        "Casos muy específicos",
        "Proyectos de investigación",
        "Cuando necesitas control total"
      ],
      rating: 3
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>🤖 Mejores Frameworks para Crear Agentes de IA</h1>
        <p>Comparación completa de herramientas y frameworks para construir agentes inteligentes en 2025</p>
      </header>

      <div className="frameworks-grid">
        {frameworks.map((framework, index) => (
          <div key={index} className="framework-card">
            <div className="framework-header">
              <div className="framework-icon">{framework.icon}</div>
              <div className="framework-title">
                <h2>{framework.name}</h2>
                <div className="framework-subtitle">{framework.subtitle}</div>
              </div>
            </div>

            <p className="framework-description">{framework.description}</p>

            <div className="pros-cons">
              <div className="pros">
                <h4>Ventajas</h4>
                <ul>
                  {framework.pros.map((pro, i) => (
                    <li key={i}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="cons">
                <h4>Desventajas</h4>
                <ul>
                  {framework.cons.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="use-cases">
              <h4>Casos de Uso Ideales</h4>
              <ul>
                {framework.useCases.map((useCase, i) => (
                  <li key={i}>{useCase}</li>
                ))}
              </ul>
            </div>

            <div className="rating">
              <span className="rating-label">Calificación:</span>
              <span className="stars">{'⭐'.repeat(framework.rating)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="recommendation">
        <h2>🎯 Recomendaciones por Caso de Uso</h2>
        <div className="recommendation-grid">
          <div className="recommendation-item">
            <h3>Para Principiantes</h3>
            <p>Empieza con <strong>LangChain Agents</strong> u <strong>OpenAI Assistants API</strong>. Son fáciles de aprender y tienen mucha documentación.</p>
          </div>

          <div className="recommendation-item">
            <h3>Para Producción</h3>
            <p>Usa <strong>LangGraph</strong> o <strong>Microsoft Semantic Kernel</strong>. Ofrecen control, escalabilidad y soporte empresarial.</p>
          </div>

          <div className="recommendation-item">
            <h3>Para Workflows Complejos</h3>
            <p><strong>LangGraph</strong> es el líder indiscutible. Permite construir flujos de trabajo sofisticados con estados y ramificaciones.</p>
          </div>

          <div className="recommendation-item">
            <h3>Para Colaboración Multi-Agente</h3>
            <p><strong>CrewAI</strong> está diseñado específicamente para esto. Permite crear equipos de agentes especializados.</p>
          </div>

          <div className="recommendation-item">
            <h3>Para Claude</h3>
            <p><strong>Claude Agent SDK</strong> o <strong>LangChain</strong> con Claude. El SDK oficial ofrece la mejor integración.</p>
          </div>

          <div className="recommendation-item">
            <h3>Para RAG/Búsqueda</h3>
            <p><strong>Haystack</strong> o <strong>LangChain</strong>. Ambos tienen excelentes capacidades de recuperación y embedding.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
