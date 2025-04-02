import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileCard() {
  return (
    <Card
      className={cn(
        "w-[300px] rounded-lg",
        "bg-background shadow-lg shadow-zinc-700/20",
        "transition-all duration-300 hover:shadow-3xl",
      )}
    >
      <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <Avatar className="h-24 w-24 border-2 border-background shadow-sm">
              <AvatarImage src="/images/avatar.png" alt="User Avatar" />
              <AvatarFallback className="bg-primary/10 text-primary text-lg font-medium">U</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="text-lg font-medium">dipxsy</h3>
          <div className="w-full space-y-4 pt-2">
            <div className="flex items-center justify-between text-sm px-1">
              <span className="text-muted-foreground">Email</span>
              <span>dipxsy@gmail.com</span>
            </div>

            <div className="h-px w-full bg-border/50"></div>

            <div className="flex items-center justify-between text-sm px-1">
              <span className="text-muted-foreground">Characters</span>
              <span>200</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
