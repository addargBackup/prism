import { BackgroundGradient } from "./components/ui/backgroundGradient";

export default function Agent() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 w-full">
            <BackgroundGradient/>

            <p className="text-lg text-gray-600">
                Select an option from the sidebar to configure, view, or chat
                with your ELIZA agent
            </p>
        </div>
    );
}