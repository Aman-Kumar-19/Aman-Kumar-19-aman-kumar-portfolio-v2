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
        period: "Jan 2025 - Present",
        location: "Bangalore, Karnataka",
        achievements: [
            "Built IoT telematics system with PIC32CX bare-metal firmware, custom PCB, GPS/SMS, and secure cloud connectivity.",
            "Implemented MQTT/HTTPS, Azure IoT Hub integration, and certificate-based authentication with TLS/mTLS.",
            "Developed and debugged drivers (GPIO, Timers, UART, SPI, ADC, PWM, I2C) and network/AT command sequences."
        ]
    },
    {
        company: "Seculinx",
        role: "IoT Intern",
        period: "Sept 2024 - Jan 2025",
        location: "Vellore, Tamil Nadu",
        achievements: [
            "Designed and implemented an IoT-based smart lighting system using ESP32 to optimize energy consumption and enhance user control",
            "Collaborated across teams to ensure seamless integration of hardware and software, achieving 100% functionality testing",
            "Created detailed technical documentation outlining design, implementation, and troubleshooting methods"
        ]
    },
    {
        company: "Maven Silicon Softech Pvt Ltd",
        role: "Embedded Engineer Intern",
        period: "Jun 2024 - July 2024",
        location: "Vellore, Tamil Nadu",
        achievements: [
            "Collaborated with senior engineers to design and implement digital system architectures using Embedded C",
            "Engineered a wearable obstacle detection device for visually impaired individuals, achieving 95% reliability",
            "Documented comprehensive project processes shared with cross-functional teams"
        ]
    },
    {
        company: "ASME - Team Veloce",
        role: "Technical Core Member",
        period: "June 2023 - July 2024",
        location: "Vellore, Tamil Nadu",
        achievements: [
            "Developed high-precision thrust measurement system using Arduino and sensors (HX711, ADC, load cell) for RC aircraft",
            "Integrated custom-built load cell enhancing accuracy for real-time data analysis",
            "Collected extensive datasets in CSV format, employing Python for data cleaning, visualization, and analytics"
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
