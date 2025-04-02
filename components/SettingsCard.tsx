'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Trash2, Save, UserCircle, KeyRound } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

export default function SettingsCard() {
  const [name, setName] = useState("dipxsy")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleNameChange = (e) => setName(e.target.value)
  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value)
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value)
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

  const handleSaveChanges = () => {
    console.log("Saving changes")
  }

  const handleDeleteAccount = () => {
    console.log("Deleting account")
  }

  const passwordsMatch = newPassword === confirmPassword
  const canSave = (name !== "dipxsy" || (newPassword && confirmPassword && passwordsMatch))

  return (
    <Card className="w-full max-w-4xl bg-background shadow-sm p-2">
      <CardHeader className="pb-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border border-border/30">
              <AvatarImage src="/images/avatar.png" alt="User Avatar" />
              <AvatarFallback className="bg-primary/10 text-primary text-lg">U</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">Account Settings</CardTitle>
              <p className="text-sm text-muted-foreground">dipxsy@gmail.com</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <UserCircle className="h-5 w-5 text-primary/70" />
              <h3 className="font-medium">Profile Information</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Display Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="h-10"
                />
              </div>

              <div className="pt-4">
                <Button
                  className="w-full"
                  onClick={handleSaveChanges}
                  disabled={name === "dipxsy"}
                >
                  <Save size={16} className="mr-2" />
                  Update Profile
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <KeyRound className="h-5 w-5 text-primary/70" />
              <h3 className="font-medium">Security</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password" className="text-sm font-medium">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  value={currentPassword}
                  onChange={handleCurrentPasswordChange}
                  className="h-10"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-sm font-medium">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    className="h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="h-10"
                  />
                </div>
              </div>

              {newPassword && confirmPassword && !passwordsMatch && (
                <p className="text-xs text-destructive mt-1">Passwords don't match</p>
              )}

              <div className="pt-4">
                <Button
                  className="w-full"
                  onClick={handleSaveChanges}
                  disabled={!(newPassword && confirmPassword && passwordsMatch)}
                >
                  <KeyRound size={16} className="mr-2" />
                  Update Password
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/40">
          <h3 className="text-sm font-medium text-destructive mb-4">Danger Zone</h3>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full md:w-auto text-destructive border-destructive/20 hover:bg-destructive/5 hover:border-destructive/30"
              >
                <Trash2 size={16} className="mr-2" />
                Delete My Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove all of your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDeleteAccount}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  )
}
