import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "PhiLabs Studio",
    email: "philabs.studio@gmail.com",
    phone: "+91 9876543210",
    business: "My Business",
  });

  const handleChange = (key: string, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log("Saved:", profile);
    // later: API call
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="text-sm text-muted-foreground">
          Manage your personal and business details
        </p>
      </div>

      {/* BASIC INFO */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Info</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              value={profile.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div>
            <Label>Phone</Label>
            <Input
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* BUSINESS INFO */}
      <Card>
        <CardHeader>
          <CardTitle>Business Info</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <Label>Business Name</Label>
            <Input
              value={profile.business}
              onChange={(e) => handleChange("business", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* ACTIONS */}
      <div className="flex justify-between">
        <Button variant="outline">Change Password</Button>

        <Button onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;