
import SectionReveal from "./SectionReveal";

const skills: Record<string, string[]> = {
    "Embedded Systems & Firmware": [
        "C",
        "Embedded C",
        "Bare-metal Firmware",
        "PIC32CX SG61",
        "STM32",
        "ESP32",
        "Peripheral Drivers",
        "Firmware Architecture",
        "PCB Bring-up"
    ],

    "MCU Peripherals & Protocols": [
        "GPIO",
        "UART",
        "SPI",
        "I²C",
        "ADC",
        "PWM",
        "Timers",
        "CAN",
        "J1939",
        "Interrupts"
    ],

    "Automotive & IoT": [
        "CAN Bus",
        "Automotive Telematics",
        "GNSS / GPS",
        "Cellular Communication",
        "Quectel EC200U",
        "MQTT",
        "HTTPS",
        "TLS / SSL",
        "Azure IoT Hub",
        "Device Telemetry"
    ],

    "Hardware & PCB": [
        "KiCad",
        "Schematic Design",
        "PCB Design",
        "PCB Layout",
        "Hardware Bring-up",
        "Logic Analyzer",
        "Oscilloscope",
        "Hardware Debugging"
    ],

    "Software & Engineering Tools": [
        "Python",
        "Flask",
        "XML Processing",
        "Pandas",
        "Jupyter",
        "Git",
        "GitHub",
        "VS Code",
        "MPLAB X",
        "NetSim"
    ]
};

export default function Skills() {
    return (
        <section id="skills" className="relative px-8 py-32">
            <SectionReveal>
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-6xl font-light mb-16 text-white">
                        Technical Expertise
                    </h2>

                    <div className="space-y-12">
                        {Object.entries(skills).map(([category, items], idx) => (
                            <div key={idx} className="space-y-6">
                                <h3 className="text-xl text-white font-light">
                                    {category}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {items.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="px-5 py-3 bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/30 rounded-sm transition-all duration-300 group"
                                            style={{
                                                animation: `fadeInUp 0.5s ease-out ${i * 0.05}s both`
                                            }}
                                        >
                                            <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
                                                {skill}
                                            </span>
                                        </div>
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

