import Alert from "@/components/Alert";

export default function AlertDemo() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Alert Component Demo</h1>

      <div className="space-y-4">
        <Alert type="info" message="This is an informational alert." />
        <Alert type="success" message="Action completed successfully!" />
        <Alert type="warning" message="This is a warning alert. Be careful." />
        <Alert type="error" message="Something went wrong. Please try again." />
      </div>
    </div>
  );
}
