import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <FontAwesomeIcon
        icon={faHeartPulse}
        className="mb-6 size-16"
        style={{ color: "oklch(0.52 0.18 155 / 0.3)" }}
      />
      <h1 className="mb-2 text-6xl font-bold tracking-tight sm:text-8xl">
        404
      </h1>
      <div className="gradient-divider mx-auto mb-6" />
      <p className="mb-2 text-xl font-semibold">Page Not Found</p>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track to your health journey.
      </p>
      <Button
        size="lg"
        className="h-12 px-8"
        style={{
          backgroundColor: "oklch(0.52 0.18 155)",
          color: "#fff",
        }}
        render={<Link href="/" />}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2 size-4" />
        Back to Home
      </Button>
    </div>
  );
}
