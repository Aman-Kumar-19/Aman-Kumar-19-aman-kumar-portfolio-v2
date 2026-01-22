import SectionReveal from "./SectionReveal";

type Project = {
    title: string;
    role: string;
    period: string;
    description: string;
    impact: string;
    tech: string[];
};

const projects: Project[] = [
    {
        title: "Bare-Metal Programming",
        role: "Firmware Developer",
        period: "2025",
        description:
            "Step-by-step bare-metal firmware development on PIC32CX with real industry examples.",
        impact:
            "Showcases full-stack IoT firmware with secure cloud, GPS/SMS, and register-level programming.",
        tech: ["PIC32CX", "Azure IoT Hub", "MQTT", "TLS/mTLS", "Bare-metal Firmware"]
    },
    {
        title: "Smart Lighting IoT System",
        role: "IoT Engineer",
        period: "2024",
        description:
            "Architected an intelligent lighting infrastructure using ESP32 microcontrollers and real-time sensor networks to optimize energy consumption across commercial deployments.",
        impact:
            "100% functionality validation, seamless hardware–software integration",
        tech: ["ESP32", "Arduino", "STM32", "IoT Protocols", "Real-time Systems"]
    },
    {
        title: "Spectrum Sensing Using Fast Slepian Transform",
        role: "Researcher",
        period: "Jan 2025 - Sep 2025",
        description:
            "Implemented robust spectrum sensing for cognitive radio using Fast Slepian Transform under low SNR.",
        impact: "Improved detection accuracy, reduced false alarms, and enhanced energy efficiency for real-time use.",
        tech: ["Python", "Jupyter", "DSP", "Cognitive Radio Networks", "Spectrum Sensing", "Signal Processing"]
    },
    {
        title: "RC Aircraft Telemetry System",
        role: "Technical Lead",
        period: "2023–2024",
        description:
            "Developed high-precision thrust measurement infrastructure with custom load cells and real-time analytics.",
        impact:
            "Performance optimization through real-time telemetry",
        tech: ["Arduino", "Python", "HX711 ADC", "CSV Processing"]
    },
    {
        title: "Hybrid Cryptography for 5G Networks",
        role: "Security Researcher",
        period: "2024",
        description:
            "Published in Nature: Proposed a hybrid AES–DES–RSA architecture for high-speed 5G network security, improving encryption performance and robustness.",
        impact:
            "Improved efficiency over traditional encryption methods",
        tech: ["Python", "Jupyter", "Cryptography", "5G Security", "Algorithm Design"]
    },
    {
        title: "Line-Following Autonomous Robot",
        role: "Robotics Engineer",
        period: "2023",
        description:
            "Built an autonomous robot using QRT sensors and PID control for precise navigation.",
        impact: "25% reduction in navigation errors",
        tech: ["Arduino", "C/C++", "PID Control"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-40 px-6">
            <SectionReveal>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-medium mb-16 text-white">
                        Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="border border-slate-800 rounded-xl p-8
                           hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <h3 className="text-xl font-medium text-white mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-slate-500 mb-3">
                                    {project.role} · {project.period}
                                </p>

                                <p className="text-slate-400 mb-4">
                                    {project.description}
                                </p>

                                <p className="text-slate-300 text-sm mb-5">
                                    <span className="text-slate-500">Impact:</span>{" "}
                                    {project.impact}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 border border-slate-700
                                 text-slate-300 rounded-full"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}
