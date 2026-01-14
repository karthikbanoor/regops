import Hero from "@/components/sections/Hero";
import ReactMarkdown from 'react-markdown';
import styles from "./RichText.module.css";

// This component decides which block to render based on the component name from Strapi
export default function BlockRenderer({ block }) {
    switch (block.__component) {
        case "sections.hero":
            return <Hero data={block} />;
        case "sections.rich-text":
            return (
                <div className={styles.richTextContainer}>
                    <ReactMarkdown>{block.content}</ReactMarkdown>
                </div>
            );
        default:
            return null;
    }
}
