import SectionReveal from "./SectionReveal";

type Experience = {
    company: string;
    role: string;
    period: string;
    location: string;
    achievements: string[];
};

const experiences: Experience[] = [
    {
        company: "CNH Industrial R&D",
        role: "Hardware / Embedded Firmware Intern",
        period: "Oct 2025 – Present",
        location: "Bangalore, Karnataka",
        achievements: [
            "Developed an automotive IoT telematics system using PIC32CX SG61 bare-metal firmware, custom hardware, and the Quectel EC200U cellular module.",
            "Designed and implemented MCU peripheral drivers for GPIO, timers, UART, SPI, I²C, ADC, PWM, and CAN, including hardware bring-up and debugging on real hardware.",
            "Integrated GNSS, cellular communication, GPS telemetry, and CAN/J1939 vehicle data acquisition for connected-vehicle applications.",
            "Implemented MQTT and HTTPS communication with Azure IoT Hub and worked with TLS/mTLS, certificates, SAS authentication, and secure device-to-cloud communication.",
            "Performed EC200U board bring-up and debugged UART communication, AT-command sequencing, network registration, GNSS, SIM, and modem initialization issues.",
            "Developed and validated firmware through hardware testing, logic-analyzer/oscilloscope debugging, and systematic investigation of peripheral and communication failures."
        ]
    },
    {
        company: "Seculinx",
        role: "IoT Intern",
        period: "Sep 2024 – Jan 2025",
        location: "Vellore, Tamil Nadu",
        achievements: [
            "Designed and implemented an IoT-based smart lighting system using ESP32 for intelligent control and energy optimization.",
            "Integrated embedded hardware and software components and performed functional validation across the complete system.",
            "Developed technical documentation covering system architecture, implementation, testing, and troubleshooting procedures."
        ]
    },
    {
        company: "Maven Silicon Softech Pvt Ltd",
        role: "Embedded Engineer Intern",
        period: "Jun 2024 – Jul 2024",
        location: "Vellore, Tamil Nadu",
        achievements: [
            "Worked with senior engineers on digital system architecture and embedded application development using Embedded C.",
            "Developed a wearable obstacle-detection device for visually impaired users using embedded sensors and real-time processing.",
            "Documented implementation, testing, and troubleshooting procedures for cross-functional engineering use."
        ]
    },
    {
        company: "ASME – Team Veloce",
        role: "Technical Core Member",
        period: "Jun 2023 – Jul 2024",
        location: "Vellore, Tamil Nadu",
        achievements: [
            "Developed a real-time thrust measurement and telemetry system for RC aircraft using Arduino, load cells, and HX711 ADC instrumentation.",
            "Designed and integrated custom load-cell measurement hardware and performed sensor calibration for accurate thrust measurement.",
            "Collected and processed experimental datasets using Python, including CSV data processing, visualization, and performance analysis."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-40 px-6">
            <SectionReveal>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-medium mb-12 text-white">
                        Experience
                    </h2>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-medium text-white">
                                    {exp.role} · {exp.company}
                                </h3>

                                <p className="text-neutral-500 text-sm mb-1">
                                    {exp.period} · {exp.location}
                                </p>

                                <ul className="mt-4 space-y-2 text-neutral-400 list-disc list-inside">
                                    {exp.achievements.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}
