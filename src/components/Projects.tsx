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
        title: "Embedded IoT Telematics System",
        role: "Embedded Firmware Developer · CNH Industrial",
        period: "2025–2026",
        description:
            "Developed bare-metal firmware for an automotive IoT telematics system using the PIC32CX SG61 and Quectel EC200U cellular modem. Integrated GNSS, cellular communication, CAN, and cloud connectivity for vehicle telemetry.",
        impact:
            "Implemented MCU peripheral drivers, modem communication, GPS telemetry, MQTT/HTTPS communication, and secure cloud connectivity with Azure IoT Hub.",
        tech: [
            "PIC32CX SG61",
            "Embedded C",
            "Bare-metal",
            "EC200U",
            "GNSS",
            "CAN / J1939",
            "MQTT",
            "HTTPS",
            "TLS / mTLS",
            "Azure IoT Hub"
        ]
    },
    {
        title: "PIC32CX SG61 Bare-Metal Firmware",
        role: "Embedded Firmware Developer",
        period: "2026",
        description:
            "Built a register-level firmware foundation for the PIC32CX SG61 microcontroller, focusing on peripheral configuration, clocking, interrupts, and hardware bring-up without relying on high-level frameworks.",
        impact:
            "Developed and validated reusable drivers for GPIO, UART, SPI, I²C, ADC, PWM, timers, and CAN while debugging peripheral and clock configuration issues on real hardware.",
        tech: [
            "PIC32CX SG61",
            "Embedded C",
            "Bare-metal",
            "GPIO",
            "UART",
            "SPI",
            "I²C",
            "ADC",
            "PWM",
            "CAN"
        ]
    },
    {
        title: "CAN Bus Simulator & Analyzer",
        role: "Python Developer",
        period: "2026",
        description:
            "Developed a modular Python-based CAN simulation and analysis environment with virtual ECUs, CAN message generation, signal decoding, DBC-based encoding, and captured bus analysis.",
        impact:
            "Created a software-only environment for testing ECU interactions, CAN messages, signals, and vehicle behavior without requiring physical CAN hardware.",
        tech: [
            "Python",
            "CAN",
            "DBC",
            "ECU Simulation",
            "Signal Decoding",
            "Vehicle Modeling",
            "Data Analysis"
        ]
    },
    {
        title: "AeroCore — Custom STM32 Flight Controller",
        role: "Embedded & Hardware Engineer",
        period: "2026",
        description:
            "Designed a custom STM32-based flight controller with a structured hardware architecture covering the MCU, power management, sensors, communication interfaces, debugging, and PCB design.",
        impact:
            "Developed the complete engineering workflow from component selection and schematic architecture to PCB layout and embedded-system planning.",
        tech: [
            "STM32",
            "Embedded C",
            "KiCad",
            "PCB Design",
            "Schematic Design",
            "IMU",
            "SPI",
            "I²C",
            "UART",
            "Flight Control"
        ]
    },
    {
        title: "EC200U Board Bring-up",
        role: "Embedded & Hardware Engineer",
        period: "2026",
        description:
            "Performed hardware bring-up and validation of the Quectel EC200U cellular IoT module, including power, UART communication, GNSS, SIM connectivity, network registration, and AT-command based modem control.",
        impact:
            "Established reliable communication between the host MCU and EC200U, validated cellular and GNSS functionality, and debugged modem initialization, AT-command sequencing, and communication issues.",
        tech: [
            "Quectel EC200U",
            "4G LTE",
            "Hardware Bring-up",
            "UART",
            "GNSS / GPS",
            "AT Commands",
            "SIM",
            "Cellular Communication",
            "Embedded C",
            "Oscilloscope / Logic Analyzer"
        ]
    },
    {
        title: "Smart Battery Management System Simulator",
        role: "Embedded Systems & Python Developer",
        period: "2026",
        description:
            "Designed a software-defined BMS architecture with a Python simulation layer and dashboard for monitoring battery voltage, current, temperature, state of charge, and system conditions.",
        impact:
            "Created a hardware-independent environment for experimenting with BMS logic, battery behavior, monitoring, and fault conditions before physical implementation.",
        tech: [
            "Python",
            "Battery Management",
            "BMS",
            "Simulation",
            "State of Charge",
            "Telemetry",
            "Dashboard"
        ]
    },
    {
        title: "Siemens / Capital Wiring Harness Diff Tool",
        role: "Python Developer",
        period: "2026",
        description:
            "Built a Flask-based web application and CLI tool to parse and compare Siemens/Capital wiring harness XML exports across incompatible schema versions.",
        impact:
            "Implemented schema-agnostic extraction and classified connectors, wires, splices, and components as Added, Removed, Modified, or Unchanged, with Excel report generation.",
        tech: [
            "Python",
            "Flask",
            "XML",
            "Pandas",
            "CLI",
            "Excel",
            "Data Processing",
            "Schema Mapping"
        ]
    },
    {
        title: "RC Aircraft Telemetry System",
        role: "Technical Lead",
        period: "2023–2024",
        description:
            "Developed a real-time thrust measurement and telemetry system using custom load-cell instrumentation, HX711 ADC hardware, Arduino, and Python-based data processing.",
        impact:
            "Enabled real-time measurement, logging, and analysis of aircraft thrust data for performance evaluation and optimization.",
        tech: [
            "Arduino",
            "C/C++",
            "HX711",
            "Load Cell",
            "Python",
            "Telemetry",
            "CSV Processing"
        ]
    },
    {
        title: "Spectrum Sensing Using Fast Slepian Transform",
        role: "Researcher",
        period: "Jan 2025–Sep 2025",
        description:
            "Implemented spectrum-sensing techniques for cognitive radio networks using the Fast Slepian Transform, with a focus on reliable detection under low-SNR conditions.",
        impact:
            "Explored improved spectrum detection performance and reduced false-alarm behavior for energy-efficient cognitive radio applications.",
        tech: [
            "Python",
            "Jupyter",
            "DSP",
            "Signal Processing",
            "Cognitive Radio",
            "Spectrum Sensing"
        ]
    },
    {
        title: "Hybrid Cryptography for 5G Networks",
        role: "Security Researcher",
        period: "2024",
        description:
            "Developed and evaluated a hybrid cryptographic architecture combining AES, DES, and RSA techniques for secure communication in 5G network environments.",
        impact:
            "Investigated the trade-offs between encryption security, computational overhead, and communication performance.",
        tech: [
            "Python",
            "Jupyter",
            "Cryptography",
            "AES",
            "RSA",
            "5G Security",
            "Algorithm Design"
        ]
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
                                    <span className="text-slate-500">
                                        Impact:
                                    </span>{" "}
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

