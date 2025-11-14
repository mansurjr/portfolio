import { Metadata } from "next";
import DigitalArts from "./digital-arts";

export const metadata: Metadata = {
    title: "Digital Arts | Mansurbek Atayev",
    metadataBase: new URL("https://xattab.uz/digital-arts"),
    description: "Explore digital arts images by Mansurbek Atayev",
    openGraph: {
        title: "Digital Arts | Mansurbek Atayev",
        url: "https://atayev.uz/digital-arts",
        description: "Explore digital arts by Mansurbek Atayev",
        images: "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/digital-arts.png",
    },
};

export default function Page() {
    return (
        <div>
            <DigitalArts />
        </div>
    );
}
