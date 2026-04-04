import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Scheme {
  id: string;
  name: string;
  ministry: string;
  type: "Loan" | "Grant" | "Subsidy" | "Tax Benefit" | "Insurance" | "Other";
  industries: string[];
  companySizes: ("Micro" | "Small" | "Medium")[];
  revenueRange: { min: number; max: number | null };
  states: string[];
  benefits: string;
  eligibility: string[];
  processingTime: string;
  link: string;
  maxAmount?: string;
  interestRate?: string;
}

const governmentSchemes: Scheme[] = [
  {
    id: "pm-formalisation",
    name: "PM Formalisation of Micro Food Processing Enterprises Scheme",
    ministry: "Ministry of Food Processing Industries",
    type: "Subsidy",
    industries: ["Food & Beverage", "Food Processing", "Dairy"],
    companySizes: ["Micro", "Small"],
    revenueRange: { min: 0, max: 5000000 },
    states: ["National"],
    benefits: "Up to ₹10 lakh for plant & machinery, processing equipment, and quality upgradation",
    eligibility: [
      "Registered food processing micro enterprises",
      "Annual turnover up to ₹5 crore",
      "Minimum investment of ₹25 lakh",
    ],
    processingTime: "8-12 weeks",
    maxAmount: "₹10 lakh",
    link: "https://pmfmes.mofpi.gov.in",
  },
  {
    id: "atal-innovation",
    name: "Atal Innovation Mission - Startup India Scheme",
    ministry: "NITI Aayog",
    type: "Grant",
    industries: ["Technology", "Healthcare", "Clean Tech", "Agritech", "EdTech"],
    companySizes: ["Micro", "Small", "Medium"],
    revenueRange: { min: 0, max: 2500000 },
    states: ["National"],
    benefits: "Mentoring, seed funding up to ₹10 lakh, infrastructure access",
    eligibility: [
      "Startups registered under Startup India scheme",
      "Team of 2 or more co-founders",
      "Unique business idea with market potential",
    ],
    processingTime: "4-6 weeks",
    maxAmount: "₹10 lakh",
    link: "https://aim.gov.in",
  },
  {
    id: "credit-guarantee",
    name: "Credit Guarantee Trust Fund for Micro & Small Enterprises (CGTMSE)",
    ministry: "Ministry of MSME",
    type: "Insurance",
    industries: ["All"],
    companySizes: ["Micro", "Small"],
    revenueRange: { min: 0, max: 10000000 },
    states: ["National"],
    benefits: "Collateral-free loans up to ₹1 crore with guarantee coverage",
    eligibility: [
      "Registered MSMEs with valid GST",
      "No collateral needed",
      "Loan amount up to ₹1 crore",
      "At least 1 year of business operation",
    ],
    processingTime: "10-15 days",
    maxAmount: "₹1 crore",
    link: "https://cgtmse.in",
  },
  {
    id: "pm-mudra",
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    ministry: "Ministry of Finance - SIDBI",
    type: "Loan",
    industries: ["All"],
    companySizes: ["Micro"],
    revenueRange: { min: 0, max: null },
    states: ["National"],
    benefits: "Loans from ₹50,000 to ₹10 lakh for sector-specific activities",
    eligibility: [
      "Individuals or sole proprietors",
      "No age restriction",
      "No collateral required",
      "First-time entrepreneurs",
    ],
    processingTime: "5-7 days",
    maxAmount: "₹10 lakh",
    interestRate: "Bank-specific",
    link: "https://www.mudra.org.in",
  },
  {
    id: "subsidy-export",
    name: "Export Promotion Capital Goods (EPCG) Scheme",
    ministry: "Department of Commerce",
    type: "Subsidy",
    industries: ["Manufacturing", "Textiles", "Engineering", "Chemicals"],
    companySizes: ["Small", "Medium"],
    revenueRange: { min: 0, max: null },
    states: ["National"],
    benefits: "Import of capital goods at zero customs duty for export promotion",
    eligibility: [
      "Deemed exporters, merchant exporters, and manufacturers",
      "GST registration mandatory",
      "Annual export obligation for 5-8 years",
    ],
    processingTime: "3-4 weeks",
    link: "https://commerce.gov.in",
  },
  {
    id: "pm-kvy",
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    ministry: "Ministry of Skill Development",
    type: "Grant",
    industries: ["All"],
    companySizes: ["Micro", "Small", "Medium"],
    revenueRange: { min: 0, max: null },
    states: ["National"],
    benefits: "Free skill training & certification with placement assistance",
    eligibility: [
      "Citizens of India (18+ years)",
      "No previous formal education required",
      "Free training programs available",
    ],
    processingTime: "1-3 months",
    link: "https://pmkvyofficial.org",
  },
  {
    id: "textile-scheme",
    name: "amended Technology Upgradation Fund Scheme (ATUFS)",
    ministry: "Ministry of Textiles",
    type: "Subsidy",
    industries: ["Textiles", "Garments", "Jute"],
    companySizes: ["Small", "Medium"],
    revenueRange: { min: 0, max: null },
    states: ["National"],
    benefits: "Up to 15% subsidy on machinery for textile units",
    eligibility: [
      "Textile Processing Units / Composite Mills",
      "Registered with Textile Commissioner",
      "Minimum investment limit varies",
    ],
    processingTime: "6-8 weeks",
    maxAmount: "₹20-50 lakh",
    link: "https://texmin.nic.in",
  },
  {
    id: "pm-employment",
    name: "Paramount Mantri Employment Creation Loan Scheme",
    ministry: "Ministry of MSME",
    type: "Loan",
    industries: ["All"],
    companySizes: ["Micro", "Small"],
    revenueRange: { min: 0, max: 5000000 },
    states: ["National"],
    benefits: "Loans up to ₹25 lakh for employment generation",
    eligibility: [
      "Creating 10 or more jobs",
      "Valid business plan",
      "Industrial/commercial establishment",
    ],
    processingTime: "6-8 weeks",
    maxAmount: "₹25 lakh",
    link: "https://msme.gov.in",
  },
  {
    id: "startup-india-tax",
    name: "Startup India Tax Benefit",
    ministry: "Ministry of Corporate Affairs & Income Tax",
    type: "Tax Benefit",
    industries: ["All"],
    companySizes: ["Micro", "Small"],
    revenueRange: { min: 0, max: null },
    states: ["National"],
    benefits: "3-year tax holiday + carry forward losses benefit",
    eligibility: [
      "Recognized by DPIIT",
      "Incorporated within 7 years",
      "Turnover less than ₹25 crore",
      "Innovation/development-focused",
    ],
    processingTime: "Immediate after recognition",
    link: "https://startupindia.gov.in",
  },
  {
    id: "stand-up-india",
    name: "Stand Up India Scheme",
    ministry: "Ministry of Finance & SIDBI",
    type: "Loan",
    industries: ["All sectors except real estate"],
    companySizes: ["Micro", "Small"],
    revenueRange: { min: 0, max: null },
    states: ["National"],
    benefits: "Bank loans of ₹10-100 lakh for green field enterprises",
    eligibility: [
      "Women entrepreneurs or SC/ST entrepreneurs",
      "First-time entrepreneurs",
      "Loans up to ₹1 crore",
    ],
    processingTime: "7-10 days",
    maxAmount: "₹1 crore",
    link: "https://standupmitra.in",
  },
];

type IndustryType = "All" | "Food & Beverage" | "Textiles" | "Technology" | "Manufacturing" | "Healthcare" | "Agritech";
type CompanySize = "All" | "Micro" | "Small" | "Medium";
type RegionType = "All" | "All states" | "National";
type SchemeType = "All" | "Loan" | "Grant" | "Subsidy" | "Tax Benefit" | "Insurance" | "Other";

const GovernmentSchemeNavigator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>("All");
  const [selectedSize, setSelectedSize] = useState<CompanySize>("All");
  const [selectedRegion, setSelectedRegion] = useState<RegionType>("National");
  const [selectedType, setSelectedType] = useState<SchemeType>("All");
  const [expandedScheme, setExpandedScheme] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredSchemes = useMemo(() => {
    return governmentSchemes.filter((scheme) => {
      const matchesSearch =
        searchQuery === "" ||
        scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.ministry.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesIndustry =
        selectedIndustry === "All" ||
        scheme.industries.includes(selectedIndustry) ||
        scheme.industries.includes("All");

      const matchesSize =
        selectedSize === "All" || scheme.companySizes.includes(selectedSize as "Micro" | "Small" | "Medium");

      const matchesType = selectedType === "All" || scheme.type === selectedType;

      return matchesSearch && matchesIndustry && matchesSize && matchesType;
    });
  }, [searchQuery, selectedIndustry, selectedSize, selectedType]);

  const handleApply = (schemeName: string) => {
    toast({
      title: "Application Initiated",
      description: `You'll be redirected to ${schemeName} application portal.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Government Scheme Navigator</h1>
        <p className="text-sm text-muted-foreground">Find relevant government schemes for your MSME in real-time</p>
      </div>

      {/* Filters */}
      <Card className="border-border shadow-[var(--card-shadow)]">
        <CardHeader>
          <CardTitle className="text-base">Filter Schemes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search schemes by name or ministry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Industry Type</label>
              <Select value={selectedIndustry} onValueChange={(value) => setSelectedIndustry(value as IndustryType)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Industries</SelectItem>
                  <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                  <SelectItem value="Textiles">Textiles</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Agritech">Agritech</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company Size</label>
              <Select value={selectedSize} onValueChange={(value) => setSelectedSize(value as CompanySize)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Sizes</SelectItem>
                  <SelectItem value="Micro">Micro (Turnover &lt; ₹25L)</SelectItem>
                  <SelectItem value="Small">Small (Turnover ₹25L - ₹5Cr)</SelectItem>
                  <SelectItem value="Medium">Medium (Turnover ₹5Cr - ₹25Cr)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Scheme Type</label>
              <Select value={selectedType} onValueChange={(value) => setSelectedType(value as SchemeType)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Types</SelectItem>
                  <SelectItem value="Loan">Loan</SelectItem>
                  <SelectItem value="Grant">Grant</SelectItem>
                  <SelectItem value="Subsidy">Subsidy</SelectItem>
                  <SelectItem value="Tax Benefit">Tax Benefit</SelectItem>
                  <SelectItem value="Insurance">Insurance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Region</label>
              <Select value={selectedRegion} onValueChange={(value) => setSelectedRegion(value as RegionType)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="National">National Schemes</SelectItem>
                  <SelectItem value="All states">All States</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-4">
        <div>
          <p className="text-sm font-medium text-foreground">
            Found <span className="font-bold text-accent">{filteredSchemes.length}</span> matching schemes
          </p>
          <p className="text-xs text-muted-foreground">Based on your current filters</p>
        </div>
        {filteredSchemes.length > 0 && (
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("");
              setSelectedIndustry("All");
              setSelectedSize("All");
              setSelectedType("All");
            }}
            size="sm"
          >
            Reset Filters
          </Button>
        )}
      </div>

      {/* Schemes List */}
      <div className="space-y-4">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme) => (
            <Card
              key={scheme.id}
              className="border-border shadow-[var(--card-shadow)] cursor-pointer transition-all hover:shadow-lg"
              onClick={() => setExpandedScheme(expandedScheme === scheme.id ? null : scheme.id)}
            >
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg">{scheme.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{scheme.ministry}</p>
                    </div>
                    <Badge variant="outline">{scheme.type}</Badge>
                  </div>

                  {/* Quick Info */}
                  <div className="grid gap-3 md:grid-cols-4 text-sm">
                    <div className="rounded-lg bg-secondary p-3">
                      <p className="text-xs text-muted-foreground mb-1">Max Amount</p>
                      <p className="font-semibold text-foreground">{scheme.maxAmount || "Variable"}</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-3">
                      <p className="text-xs text-muted-foreground mb-1">Processing Time</p>
                      <p className="font-semibold text-foreground">{scheme.processingTime}</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-3">
                      <p className="text-xs text-muted-foreground mb-1">Interest Rate</p>
                      <p className="font-semibold text-foreground">{scheme.interestRate || "N/A"}</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-3">
                      <p className="text-xs text-muted-foreground mb-1">Applicable For</p>
                      <p className="font-semibold text-foreground">{scheme.companySizes.join(", ")}</p>
                    </div>
                  </div>

                  {/* Benefits Preview */}
                  <div className="rounded-lg border border-border bg-secondary/30 p-3">
                    <p className="text-sm text-foreground">{scheme.benefits}</p>
                  </div>

                  {/* Expandable Details */}
                  {expandedScheme === scheme.id && (
                    <div className="space-y-4 border-t border-border pt-4">
                      {/* Eligibility */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                          Eligibility Criteria
                        </h4>
                        <ul className="space-y-1">
                          {scheme.eligibility.map((item, idx) => (
                            <li key={idx} className="text-sm text-foreground flex gap-2">
                              <span className="text-muted-foreground">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Industries */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Applicable Industries</h4>
                        <div className="flex flex-wrap gap-2">
                          {scheme.industries.map((industry) => (
                            <Badge key={industry} variant="secondary">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-2 pt-2">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApply(scheme.name);
                          }}
                          className="flex-1"
                        >
                          Apply Now
                        </Button>
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(scheme.link, "_blank");
                          }}
                          className="flex-1"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Expand Indicator */}
                  {expandedScheme !== scheme.id && (
                    <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                      <span>Click to expand details</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-border shadow-[var(--card-shadow)]">
            <CardContent className="pt-6 text-center py-12">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-foreground font-medium">No schemes found</p>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters to find relevant schemes</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GovernmentSchemeNavigator;
