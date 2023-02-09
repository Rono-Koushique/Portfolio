import React from "react";
import Wall from "../containers/Wall";
import BrandLogo from "../navigation/BrandLogo";
import SocialLinks from "@/data/SocialLinks.json";
import SocialIcon from "../buttons/SocialIcon";
import ContactInfo from "@/data/ContactInfo.json";
import QuickLinks from "@/data/QuickLinks.json";
import FtContact from "../cards/FtContact";
import FtQuickLinks from "../cards/FtQuickLinks";

type Props = {};

export default function BirdsEye({}: Props) {
    return (
        <Wall className="bg-gray-100">
            <div className="max-w-def py-20 grid grid-cols-3 gap-8">
                {/* left elements */}
                <div className="flex flex-col items-start gap-6">
                    <BrandLogo />
                    <p className="leading-loose text-neutral-400 pr-12">
                        As a skilled web developer I offer web services
                        including web design, front-end and back-end
                        development, and e-commerce solutions. I deliver
                        exceptional results tailored to clients&apos; specific
                        needs on time and on budget.
                    </p>
                    <div className="flex gap-3">
                        {SocialLinks.socialLinks.map((link, idx) => {
                            return (
                                <SocialIcon
                                    key={`link-${idx}`}
                                    href=""
                                    icon={link.icon}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* middle elements */}
                <div className="content">
                    <h3 className="!mb-1">Quick Links</h3>
                    <hr />
                    <div className="flex flex-col mt-4 gap-4">
                        {QuickLinks.quickLinks.map((data, idx) => {
                            return (
                                <FtQuickLinks
                                    key={`quick-link-${idx}`}
                                    title={data.title}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* right elements */}
                <div className="content">
                    <h3 className="!mb-1">Contacts</h3>
                    <hr />
                    <div className="flex flex-col gap-4 mt-4">
                        {ContactInfo.contactData.map((data, idx) => {
                            return (
                                <FtContact
                                    key={`contact-data-${idx}`}
                                    icon={data.icon}
                                    title={data.title}
                                    value={data.value}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Wall>
    );
}
