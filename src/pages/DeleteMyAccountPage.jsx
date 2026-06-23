import { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, Phone, ShieldAlert, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteCandidateAccount } from "@/lib/account-api";
import { formatPhoneDisplay, isValidPhone, normalizePhoneInput, toApiPhone } from "@/lib/phone";
const beforeProceed = [
  "Account deletion is permanent and cannot be undone",
  "Download any data you wish to keep before proceeding",
  "Cancel any active subscriptions before deletion",
];

export function DeleteMyAccountPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const canDelete = isValidPhone(phoneNumber) && confirmed && !deleting;
  const displayPhone = `+91 ${toApiPhone(phoneNumber)}`;

  const performDelete = async () => {
    const phone = toApiPhone(phoneNumber);
    setDeleting(true);
    try {
      const result = await deleteCandidateAccount(phone);
      setConfirmOpen(false);
      toast.success(result.message || "Account deleted successfully.");
      setPhoneNumber("");
      setConfirmed(false);
    } catch (err) {
      toast.error(err.message || "Account deletion failed. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (!canDelete) return;
    setConfirmOpen(true);
  };
  return (
    <section className="relative z-10 pt-36 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-10 glow-border">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs text-destructive mb-4">
              <ShieldAlert className="size-3.5" />
              Account Deletion
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              We&apos;re sorry to see you go
            </h1>
            <p className="mt-3 text-muted-foreground">
              This will permanently remove your GoCareer candidate account and all associated data.
            </p>

            <div className="mt-8 rounded-2xl border border-border/70 bg-background/60 p-5">
              <h2 className="text-sm font-semibold flex items-center gap-2">
                <AlertTriangle className="size-4 text-amber-500" />
                Before you proceed
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                {beforeProceed.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 size-1.5 rounded-full bg-destructive/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleDelete} className="mt-8 space-y-6">
              <div className="rounded-2xl border border-border/70 bg-background/60 p-5 space-y-4">
                <div>
                  <h2 className="text-sm font-semibold flex items-center gap-2">
                    <Phone className="size-4 text-primary" />
                    Phone Number
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Enter your 10-digit registered mobile number (with or without +91)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex rounded-xl border border-border bg-secondary overflow-hidden focus-within:ring-1 focus-within:ring-primary">
                    <span className="inline-flex items-center px-3 text-sm text-muted-foreground border-r border-border bg-background/50 shrink-0">
                      +91
                    </span>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={formatPhoneDisplay(phoneNumber)}
                      onChange={(e) => setPhoneNumber(normalizePhoneInput(e.target.value))}
                      onPaste={(e) => {
                        e.preventDefault();
                        setPhoneNumber(normalizePhoneInput(e.clipboardData.getData("text")));
                      }}
                      className="rounded-none border-0 bg-transparent focus-visible:ring-0"
                    />
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={confirmed}
                  onCheckedChange={(v) => setConfirmed(v === true)}
                  className="mt-0.5"
                />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  I confirm that I want to permanently delete my account and all associated data
                  from the platform.
                </span>
              </label>

              <Button
                type="submit"
                disabled={!canDelete}
                className="w-full rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90 h-12"
              >
                <Trash2 className="size-4 mr-2" />
                {deleting ? "Deleting account…" : "Delete My Account"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent className="rounded-2xl max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display text-xl">
              Confirm account deletion?
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-3 text-left">
                <p>
                  You are about to permanently delete the GoCareer account linked to{" "}
                  <span className="font-medium text-foreground">{displayPhone}</span>.
                </p>
                <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2 text-destructive">
                  This action cannot be undone. All your data will be removed from the platform.
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2 sm:gap-2">
            <AlertDialogCancel disabled={deleting} className="rounded-xl">
              Cancel
            </AlertDialogCancel>
            <Button
              type="button"
              disabled={deleting}
              onClick={performDelete}
              className="rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Deleting…" : "Yes, delete my account"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>  );
}
