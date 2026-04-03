import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const campaignTexts = {
  English: {
    whatsapp: `*Ravi Textiles — Diwali Special! 🪔*\n\nDear Customer,\n\nCelebrate Diwali with *20% OFF on all fabric!*\n\n✓ Premium cotton, silk & synthetic\n✓ Wholesale & retail available\n✓ Same-day dispatch on urgent orders\n✓ GST invoice provided\n\nOffer valid till 5th November only.\n\nReply "YES" to place your order.\n📞 +91 98765 43210`,
    instagram: `Diwali Sale is here! ✨\n\n20% OFF on all fabric at Ravi Textiles 🪔\n\nCotton · Silk · Synthetic\nWholesale & Retail\n\nDM us or call +91 98765 43210\n\n#DiwaliSale #Textiles #Bengaluru #FabricShop #MSME #ShopLocal`,
    facebook: `🎊 DIWALI SPECIAL from Ravi Textiles!\n\n20% discount on ALL fabric — limited time only.\n\n📦 Wholesale & Retail\n🚚 Same-day dispatch\n🧾 GST invoice\n\nOrder before 5th November!\n📞 +91 98765 43210 | #12 Chickpet, Bengaluru`,
  },
  "Kannada (ಕನ್ನಡ)": {
    whatsapp: `*ರವಿ ಟೆಕ್ಸ್ಟೈಲ್ಸ್ — ದೀಪಾವಳಿ ವಿಶೇಷ! 🪔*\n\nಪ್ರಿಯ ಗ್ರಾಹಕರೇ,\n\nಈ ದೀಪಾವಳಿಗೆ ಎಲ್ಲಾ ಫ್ಯಾಬ್ರಿಕ್ ಮೇಲೆ *20% ರಿಯಾಯಿತಿ!*\n\n✓ ಕಾಟನ್, ಸಿಲ್ಕ್ & ಸಿಂಥೆಟಿಕ್\n✓ ಸಗಟು ಮತ್ತು ಚಿಲ್ಲರೆ ಲಭ್ಯ\n✓ ತಕ್ಷಣ ಡೆಲಿವರಿ\n✓ GST ಇನ್ವಾಯ್ಸ್\n\nನವೆಂಬರ್ 5 ರವರೆಗೆ ಮಾತ್ರ.\n\n"ಹೌದು" ಎಂದು ಉತ್ತರಿಸಿ.\n📞 +91 98765 43210`,
    instagram: `Diwali Sale is here! ✨\n\n20% OFF on all fabric at Ravi Textiles 🪔\n\nCotton · Silk · Synthetic\nWholesale & Retail\n\nDM us or call +91 98765 43210\n\n#DiwaliSale #Textiles #Bengaluru #FabricShop #MSME #ShopLocal`,
    facebook: `🎊 DIWALI SPECIAL from Ravi Textiles!\n\n20% discount on ALL fabric — limited time only.\n\n📦 Wholesale & Retail\n🚚 Same-day dispatch\n🧾 GST invoice\n\nOrder before 5th November!\n📞 +91 98765 43210 | #12 Chickpet, Bengaluru`,
  },
  "Hindi (हिंदी)": {
    whatsapp: `*रवि टेक्सटाइल्स — दिवाली स्पेशल! 🪔*\n\nप्रिय ग्राहक,\n\nइस दिवाली सभी कपड़ों पर *20% की छूट!*\n\n✓ कॉटन, सिल्क & सिंथेटिक\n✓ थोक और खुदरा उपलब्ध\n✓ अर्जेंट ऑर्डर पर उसी दिन डिस्पैच\n✓ GST इनवॉयस\n\n5 नवंबर तक ही।\n\n"हाँ" लिखकर ऑर्डर करें।\n📞 +91 98765 43210`,
    instagram: `Diwali Sale is here! ✨\n\n20% OFF on all fabric at Ravi Textiles 🪔\n\nCotton · Silk · Synthetic\nWholesale & Retail\n\nDM us or call +91 98765 43210\n\n#DiwaliSale #Textiles #Bengaluru #FabricShop #MSME #ShopLocal`,
    facebook: `🎊 DIWALI SPECIAL from Ravi Textiles!\n\n20% discount on ALL fabric — limited time only.\n\n📦 Wholesale & Retail\n🚚 Same-day dispatch\n🧾 GST invoice\n\nOrder before 5th November!\n📞 +91 98765 43210 | #12 Chickpet, Bengaluru`,
  },
};

const targetSegments = [
  { id: "all", label: "All contacts", count: 47 },
  { id: "inactive-30", label: "Not contacted in 30+ days", count: 18 },
  { id: "high-value", label: "High value (₹10K+)", count: 11 },
  { id: "not-converted", label: "Leads not yet converted", count: 23 },
];

const CampaignsPage = () => {
  const [language, setLanguage] = useState<keyof typeof campaignTexts>("English");
  const [generatedCampaigns, setGeneratedCampaigns] = useState<{
    whatsapp: string;
    instagram: string;
    facebook: string;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedSegments, setSelectedSegments] = useState({
    all: true,
    "inactive-30": true,
    "high-value": false,
    "not-converted": false,
  });
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedCampaigns(campaignTexts[language]);
      setIsGenerating(false);
      toast({
        title: "Campaign Generated",
        description: "Your marketing campaign has been created successfully.",
      });
    }, 900);
  };

  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: `${platform} content copied to clipboard!`,
    });
  };

  const handleSendCampaign = () => {
    const selectedCount = Object.entries(selectedSegments)
      .filter(([_, selected]) => selected)
      .reduce((sum, [id]) => {
        const segment = targetSegments.find((s) => s.id === id);
        return sum + (segment?.count || 0);
      }, 0);

    toast({
      title: "Campaign Sent",
      description: `Campaign sent to ${selectedCount} contacts across selected segments!`,
    });
  };

  const handleSegmentToggle = (id: string) => {
    setSelectedSegments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">AI Campaigns</h1>
        <p className="text-sm text-muted-foreground">Generate and send marketing campaigns in seconds</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border shadow-[var(--card-shadow)] lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              AI Campaign Generator
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">WhatsApp · Instagram · Facebook</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Select Language</label>
              <Select value={language} onValueChange={(value) => setLanguage(value as keyof typeof campaignTexts)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Kannada (ಕನ್ನಡ)">Kannada (ಕನ್ನಡ)</SelectItem>
                  <SelectItem value="Hindi (हिंदी)">Hindi (हिंदी)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleGenerate} disabled={isGenerating} className="w-full gap-2">
              <Zap className="h-4 w-4" />
              {isGenerating ? "Generating..." : "Generate Campaign →"}
            </Button>

            {generatedCampaigns && (
              <div className="space-y-4">
                <Tabs defaultValue="whatsapp" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                    <TabsTrigger value="instagram">Instagram</TabsTrigger>
                    <TabsTrigger value="facebook">Facebook</TabsTrigger>
                  </TabsList>

                  <TabsContent value="whatsapp" className="space-y-3">
                    <div className="rounded-lg bg-secondary p-4 min-h-[200px] whitespace-pre-wrap text-sm text-foreground">
                      {generatedCampaigns.whatsapp}
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => handleCopy(generatedCampaigns.whatsapp, "WhatsApp")}
                      className="w-full gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy WhatsApp Content
                    </Button>
                  </TabsContent>

                  <TabsContent value="instagram" className="space-y-3">
                    <div className="rounded-lg bg-secondary p-4 min-h-[200px] whitespace-pre-wrap text-sm text-foreground">
                      {generatedCampaigns.instagram}
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => handleCopy(generatedCampaigns.instagram, "Instagram")}
                      className="w-full gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy Instagram Content
                    </Button>
                  </TabsContent>

                  <TabsContent value="facebook" className="space-y-3">
                    <div className="rounded-lg bg-secondary p-4 min-h-[200px] whitespace-pre-wrap text-sm text-foreground">
                      {generatedCampaigns.facebook}
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => handleCopy(generatedCampaigns.facebook, "Facebook")}
                      className="w-full gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy Facebook Content
                    </Button>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-border shadow-[var(--card-shadow)]">
          <CardHeader>
            <CardTitle>Target Segment</CardTitle>
            <p className="text-sm text-muted-foreground">Who receives this campaign</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {targetSegments.map((segment) => (
              <div key={segment.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                <Checkbox
                  id={segment.id}
                  checked={selectedSegments[segment.id as keyof typeof selectedSegments] || false}
                  onCheckedChange={() => handleSegmentToggle(segment.id)}
                />
                <label
                  htmlFor={segment.id}
                  className="flex-1 cursor-pointer text-sm font-medium text-foreground"
                >
                  {segment.label}
                </label>
                <span className="text-xs text-muted-foreground font-mono">{segment.count}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border shadow-[var(--card-shadow)]">
          <CardHeader>
            <CardTitle>Send Campaign</CardTitle>
            <p className="text-sm text-muted-foreground">Reach your customers instantly</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-secondary p-4 text-sm">
              <p className="text-muted-foreground">Selected recipients:</p>
              <p className="text-lg font-semibold text-foreground mt-1">
                {Object.entries(selectedSegments)
                  .filter(([_, selected]) => selected)
                  .reduce((sum, [id]) => {
                    const segment = targetSegments.find((s) => s.id === id);
                    return sum + (segment?.count || 0);
                  }, 0)}{" "}
                contacts
              </p>
            </div>
            <Button onClick={handleSendCampaign} disabled={!generatedCampaigns} className="w-full">
              Send to Selected
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CampaignsPage;
