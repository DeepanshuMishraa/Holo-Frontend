import { BoxIcon, HouseIcon, PanelsTopLeftIcon, SettingsIcon, UserIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProfileCard from "./ProfileCard"
import SettingsCard from "./SettingsCard"

export default function ProfileForm() {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea>
        <TabsList className="mb-3">
          <TabsTrigger value="tab-1">
            <UserIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Profile
          </TabsTrigger>
          <TabsTrigger value="tab-2" className="group">
            <SettingsIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Settings
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1">
        <ProfileCard />
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">
          <SettingsCard />
        </p>
      </TabsContent>
    </Tabs>
  )
}
