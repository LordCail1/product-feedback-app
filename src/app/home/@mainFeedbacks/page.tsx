import SuggestionNavbar from "../../components/SuggestionNavbar/SuggestionNavbar";
import FeedbackList from "../components/FeedbackList/FeedbackList";

export default function Page() {
    return (
        <section className="basis-[825px] ml-8 relative flex flex-col">
            <SuggestionNavbar />
            <FeedbackList />
            
        </section>
    )
}