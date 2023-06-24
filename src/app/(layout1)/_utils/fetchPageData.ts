import services from "@/data/services.json";
import areasOfWork from "@/data/areasOfWork.json";
import recentWorks from "@/data/recentWorks.json";
import socials from "@/data/socials.json";

export default function fetchPageData() {
    return {
        status: 200,
        results: { services, areasOfWork, recentWorks, socials },
    };
}
