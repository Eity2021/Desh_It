import React from 'react'
import StatItem from '../heroSection/StatItem'

export default function CompanyInfo() {
    return (
        <div>
            <div className="container mx-auto w-full">
                <div className="bg-gradient-to-r from-[#7d29f3] via-[#ee78ff] to-[#5078ff] rounded-[2.5rem] p-6 md:p-8 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
                    <StatItem icon="&#128197;" value="9+" label="Years Of Experience" />
                    <StatItem icon="&#128187;" value="40+" label="Project Completed" />
                    <StatItem icon="&#128516;" value="300+" label="Satisfied Client" />
                    <StatItem icon="&#129351;" value="18+" label="Award Winner" />
                </div>
            </div></div>
    )
}
