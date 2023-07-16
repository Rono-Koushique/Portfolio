import skills from "@/data/skills.json";
import recentWorks from "@/data/recentWorks.json";
import socials from "@/data/socials.json";

export default function fetchPageData() {
    return {
        status: 200,
        results: { skills, recentWorks, socials },
    };
}
