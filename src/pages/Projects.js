import React, { useEffect, useState } from "react";
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Filter,
  ChevronRight,
  Building2,
  DollarSign,
  Briefcase,
  FileText,
  Users,
  Clock,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedYear, setSelectedYear] = useState("All");

  const projects = 
[
  {
    startingYear: "2022",
    endingYear: "2026",
    fundingSource: "World Bank financed",
    contractName: "Procurement of Civil Works Lot 1: Construction of 15 schools in District Shikarpur",
    briefDescription: "Construction of 15 SCHOOLS GROUND+2,GROUND +3 Civil Works,Plumbing Work and Electrification Works",
    contractAmount: "1,660,191,970 PKR",
    employer: "Chief Program Manager, Reform Support Unit, PMIU/Selection School Education & Literacy Department Govt. of Sindh",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2026",
    fundingSource: "World Bank financed",
    contractName: "Procurement of Civil Works Lot 2: Construction of 15 schools in District Kashmore",
    briefDescription: "Construction of 15 SCHOOLS GROUND+2, GROUND +3 Civil Works, Plumbing Work and Electrification Works",
    contractAmount: "1,663,286,414 PKR",
    employer: "Chief Program Manager, Reform Support Unit, PMIU/Selection School Education & Literacy Department Govt. of Sindh",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2025",
    fundingSource: "World Bank financed",
    contractName: "SBIP/G3A:CONSTRUCION OF RIGHT TJ SPUR OF GUUDU BARRAGE",
    contractAmount: "1,062,582,381 PKR",
    employer: "(PMO) Sindh barrages improvement project (SBIP)Irrigation Department Sindh",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2024",
    fundingSource: "World Bank financed",
    contractName: "Rehabilitation of Ruk Loop Bund (Additional Work not carried out in Phase-I PD/SFERP/498 Dated 26-06-2024",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron,Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil, Earthwork Filling",
    contractAmount: "1,389,946,0658 PKR",
    employer: "Project Director, Sindh Flood Emergency Rehabilitation Project (SFERP) Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII, Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2023",
    fundingSource: "World Bank financed",
    contractName: "Construction of Small / Recharge Dam in Package No 6 LOT No.1 Flood Detention Dam Mole-07(DD/W-M7 along Mole Nai) (Contract No. PD/SFERP/392 Dated 07 March 2023",
    briefDescription: "Earthen Embankment, Approach Bundes, Stone Pitching,Stone Apron, Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil, Earthwork Filling",
    contractAmount: "1,250,440,608 PKR",
    employer: "Project Director, Sindh Flood Emergency Rehabilitation Project (SFERP) Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII, Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    "consultant": "G3 Engineering",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2023",
    fundingSource: "World Bank financed",
    contractName: "Rehabilitation of F.P Bund (RD 0+000 To RD 20+000 & RD 75+000 To RD 160+000) (Contract No.PD/SFERP/PROC/582 Dated 30 Dec 2022)",
    briefDescription: "Earthen Embankment,Approach Bundes, Stone Pitching,Stone Apron,Stone Filling",
    contractAmount: "991,606,887 PKR",
    employer: "Project Director,Sindh Flood Emergency Rehabilitation Project (SFER) Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2023",
    fundingSource: "ADP SCHEMES",
    contractName: "Rehabilitation of Retaining Wall (3 RDs) along Danistar Canal (Bubak Miani Town) (Contract No. PD/SFERP/PROC/581 Dated 30 Dec 2022)",
    briefDescription: "RCC, PCC, Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "1,094,778,620 PKR",
    employer: "Project Director,Sindh Flood Emergency Rehabilitation Project (SFER) Irrigation Component,Karachi",
    address: "Bungalow No.125-B, Khayaban-e-Bahria, Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2023",
    fundingSource: "World Bank financed",
    contractName: "Rehabilitation of Manchar Containing Bund (RD 54+000 To RD 777+000) (Contract No. PD/SFERP/PROC/296 Dated 04 Nov 2022)",
    briefDescription: "Earthen Embankment,Approach Bunds, Stone Pitching, Stone Apron, Stone Filling",
    contractAmount: "986,313,501 PKR",
    employer: "Project Director,Sindh Flood Emergency Rehabilitation Project (SFERP) Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2023",
    fundingSource: "World Bank financed",
    contractName: "Repair of Gaj Diversion Bund Ledge and Stone Apron deom RD 3-11, Repair of Gaj Diversion Bund Stone Apron from RD 15-32.5)(Contract No. PD/SFERP/PROC/721 Dated 31 Oct 2022)",
    briefDescription: "Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling Earthen, Stone Pitching, Stone Apron,Stone Filling",
    contractAmount: "295,316,415 PKR",
    employer: "Project Director, Sindh Flood Emergency Rehabilitation Project (SFERP) Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2023",
    fundingSource: "World Bank financed",
    contractName: "Repair of Rain Damages of Small Dames under Small Dams Organization (Contract No. PD/SFERP/PROC/722 Dated 31 Oct 2022)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "307,418,203 PKR",
    employer: "Project Director, Sindh Flood Emergency Rehabilitation Project (SFERP) Irrigation Component,Karachi",
    address: "Bungalow No.125-B, Khayaban-e-Bahria, Defence Phase-VII, Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2024",
    fundingSource: "ADP SCHEMES",
    contractName: "Construction of Shalmani Dam in Central Kohistan (Contract No. XEN//SDO/Div:K-I/TC/325Dated 08 Jul 2022)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "302,381,809 PKR",
    employer: "Project Director, Sindh Flood Emergency Rehabilitation Project (SFERP) Irrigation Component,Karachi",
    address: "Behind Circuit House Dadu",
    phone: "+92-25-9200072",
    fax: "+92-25-9200072",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2024",
    fundingSource: "ADP SCHEMES",
    contractName: "Lining of Johi Branch From RD 0+00 to RD 60+00i/c Modules (21 Nos) RD Stone (60 Nos) and Landhi (01 No) (Contract No. TC/G-55/987 of 2022Dadu Dated 10 June 2022)",
    briefDescription: "Earthen Embankment,Stone Filling,RCC,PCC,Excavation (Earthwork) in Soft Soil, Earthwork Filling",
    contractAmount: "1,124,530,649 PKR",
    employer: "Executive Engineer Southern Dadu Division Dadu",
    phone: "+92-25-9200071",
    fax: "+92-25-9200071",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2024",
    fundingSource: "ADP SCHEMES",
    contractName: "Construction of Retaining Wall along Gaj Diversion Bund from RD 0+000 To RD 11+700 (Repair Work), Service Track of Gaj Diversion Bund from RD 0+00 To RD 31+00 (Package No.2) (Contract No. TC/G-55/514 of 2022 Dadu Dated 24March 2022)",
    briefDescription: "Earthen Embankment, Stone Filling, RCC,PCC,Excavation (Earthwork) in Soft Soil, Earthwork Filling",
    contractAmount: "1,077,279,760 PKR",
    employer: "Executive Engineer Southern Dadu Division Dadu",
    phone: "+92-25-9200071",
    fax: "+92-25-9200071",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2024",
    fundingSource: "ADP SCHEMES",
    contractName: "Construction of Retaining Wall along Gaj Diversion Bund from RD 11+700 To RD 15+100and Repair Work of Gaj Inspection Bungalow (Package No. 1) (Contract No. TC/G-55/374 of 2022Dadu Dated 01 March 2022)",
    briefDescription: "Earthen Embankment, Stone Filling, RCC,PCC,Excavation (Earthwork) in Soft Soil, Earthwork Filling",
    contractAmount: "1,526,404,692 PKR",
    employer: "Executive Engineer Southern Dadu Division Dadu",
    phone: "+92-25-9200071",
    fax: "+92-25-9200071",
    role: "Prime Contractor"
  },
  {
    startingYear: "2022",
    endingYear: "2023",
    fundingSource: "Private sector",
    contractName: "Construction of Dolphin Tower and Shopping Center Ground+2 Basement+ Fourteen Floor,Located at Minara Road Sukkur",
    briefDescription: "Construction of New Building Civil Works,Plumbing Work and Electrification Works",
    contractAmount: "1,413,824,918 PKR",
    employer: "M/s Dolphin Builders & Developers Sukkur",
    role: "Sub-contractor"
  },
  {
    startingYear: "2021",
    endingYear: "2022",
    fundingSource: "World Bank financed",
    contractName: "Construction of Small / Recharge Dam Package No.6 Lot No. 2 Dahri Sharif Dam in Lower Kohistan (Contract No. PK-SID-235618-CW-RFB-AF-17 PD/SRP/1280 Dated 10 Aug 2021",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron,Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "755,819,940 PKR",
    employer: "Project Director, Sindh Resilience Project (SFRP),Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2021",
    endingYear: "2022",
    fundingSource: "World Bank financed",
    contractName: "Construction of Small / Recharge Dam Package No. 7 Lot No. 2 Gaib Janan Dam in Lower Kohistan (Contract No. PK-SID-235632-CW-RFB-AF-18) PD/SRP/1274 Dated 10 Aug 2021",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "488,223,606 PKR",
    employer: "Project Director, Sindh Resilience Project (SRP),Irrigation Component, Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2021",
    endingYear: "2022",
    fundingSource: "World Bank financed",
    contractName: "Construction of Pathar Dam in Nagarparkar Small / Recharge Dam (Contract No. PK-SID-220145-CW-RFB-AF-10) PD/SRP/650 Dated 07 May 2021",
    briefDescription: "Earthen Embankment,Approach Bunds, Stone Pitching,Stone Apron, Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "364,987,191 PKR",
    employer: "Project Director, Sindh Resilience Project (SRP), Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII, Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2021",
    endingYear: "2022",
    fundingSource: "World Bank financed",
    contractName: "Construction of Samlee Small / Recharge Dam in Nagarparkar (Thar Region) PK-SID-178009-CW-RFB-23 PD/SRP/436 Dated 26 March 2021",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling, RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "539,849,180 PKR",
    employer: "Project Director, Sindh Resilience Project (SRP),Irrigation Component,Karachi",
    address: "Bungalow No.125-B, Khayaban-e-Bahria, Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "JV"
  },
  {
    startingYear: "2021",
    endingYear: "2022",
    fundingSource: "World Bank financed",
    contractName: "Construction of Sehriyoon Small/Recharge Dam in Nagarparkar (Thar Region) PK-SID-178011-CW-RFB-25 PD/SRP/436 Dated 26 March 2021",
    briefDescription: "Earthen Embankment,Approach Bunds,Stone Pitching,Stone Apron, Stone Filling, RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "388,024,002 PKR",
    employer: "Project Director, Sindh Resilience Project (SRP),Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "JV"
  },
  {
    startingYear: "2020",
    endingYear: "2021",
    fundingSource: "PSDP SCHEMES",
    contractName: "Construction of Small Dam/Weir Across Luthi Nai Originating from Quba Qadir Bux to Obhan Shah HHills in Sukkur & Khairpur District (Contract No.XEN//SDO/Div:K-I/TC/846 Dadu Dated 17 Dec 2020)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron,Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "301,813,997 PKR",
    employer: "Executive Engineer Small Dams Division Kohistan-I Dadu",
    address: "Behind Circuit House Dadu",
    phone: "+92-25-9200072",
    fax: "+92-25-9200072",
    role: "Prime Contractor"
  },
  {
    startingYear: "2020",
    endingYear: "2021",
    fundingSource: "PSDP SCHEMES",
    contractName: "Construction of Small Dam /Weir Across Walar Nai Originating from Quba Qadir Bux to Obhan Shah Hills in Sukkur & Khairpur District (Contract No.XEN//SDO/Div:K-I/TC/845 Dadu Dated 17 Dec 2020)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling,RCC,PCC, Excavation (Earthwork) in Hard Rocks & Soft Soil, Earthwork Filling",
    contractAmount: "199,206,585 PKR",
    employer: "Executive Engineer Small Dams Division Kohistan-I Dadu",
    address: "Behind Circuit House Dadu",
    phone: "+92-25-9200072",
    fax: "+92-25-9200072",
    role: "Prime Contractor"
  },
  {
    startingYear: "2020",
    endingYear: "2021",
    fundingSource: "PSDP SCHEMES",
    contractName: "Construction of Dadvero Dam In Nagarparkar (Thar Region) (Contract No. TC/SDD/NGP/505 Dated 22 April 2020)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron,Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "78,074,770 PKR",
    employer: "Executive Engineer Small Dams Division Nagarpakar @ Mithi",
    phone: "+92-23-2261801",
    fax: "+92-25-2261801",
    role: "Prime Contractor"
  },
  {
    startingYear: "2019",
    endingYear: "2021",
    fundingSource: "PSDP SCHEMES",
    contractName: "Construction of Upper Mole -II Small /Recharge Dam in Thano Bula Khan (Contract No. PK-SID-93084-CW-RFP-NCB-14) PD/SRP/279 Dated 04 Mar 2019",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil, Earthwork Filling",
    contractAmount: "370,698,517 PKR",
    employer: "Project Director, Sindh Resilience Project (SRP),Irrigation Component, Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2019",
    endingYear: "2020",
    fundingSource: "World Bank Financed",
    contractName: "Construction of Tikho -Il and Sureshi Small / Recharge Dam in Thano Bula Khan (Contract No.PK-SID-93084-CW-RFP-NCB-14) PD/SRP/278 Dated 04 Mar 2019",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching, Stone Apron, Stone Filling,RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "425,113,566 PKR",
    employer: "Project Director, Sindh Resilience Project (SRP),Irrigation Component,Karachi",
    address: "Bungalow No.125-B,Khayaban-e-Bahria,Defence Phase-VII,Karachi",
    phone: "+92-21-99332368",
    fax: "+92-21-99332367",
    role: "Prime Contractor"
  },
  {
    startingYear: "2018",
    endingYear: "2019",
    fundingSource: "ADP SCHEMES",
    contractName: "Construction of C.C Lining of Ghulam Ullah Distry,Gulel Minor Including Construction of New Outlet (b) Construction of AXEN Residence at Thatta (c) Repair to Damage Compound Wall of Kotri Sub Division @ Ghorabari (Contract No.TC/G-55/44/2018 Dated 12 Jan 2018",
    briefDescription: "Earthen Embankment,Stone Filling,RCC,PCC,Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "417,368,258 PKR",
    employer: "Executive Engineer Sakro Division Mirpursakro",
    address: "Office of the Executive Engineer Mirpursakro",
    role: "Prime Contractor"
  },
  {
    startingYear: "2017",
    endingYear: "2017",
    fundingSource: "ADP SCHEMES",
    contractName: "Construction of Emergent Work Restoration of Aprons T-Spurs Stone (Restoration of Aprons Main Ist Surjani Bund)",
    briefDescription: "Emergent Work Restoration of Apron T-Spurs Stone and Restoration of Aprons",
    contractAmount: "327,522,245 PKR",
    employer: "Executive Engineer Lower Pinyari Division Sujawal",
    address: "Office of the Executive Engineer Lower Pinyari Division Sujawal",
    role: "Prime Contractor"
  },
  {
    startingYear: "2017",
    endingYear: "2018",
    fundingSource: "PSDP SCHEMES",
    contractName: "Construction of Civil Works of Makhi Farash Link Canal Project (Chotiari Phase-II)) for Water Supply to Thar Coal From RD-171+400 to 208+000 in Chotiari Reservoir (I)Division Sanghar (Contract No. SKP/G-66/CRDS/73 Sanghar Dated 13 Jan 2017",
    briefDescription: "Earthen Embankment, Stone Filling,RCC,PCC,Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "278,603,868 PKR",
    employer: "Executive Engineer Chotiari Reservoir (!) Division Sanghar",
    address: "Office of the Executive Engineer Mirpursakro",
    role: "Prime Contractor"
  },
  {
    startingYear: "2017",
    endingYear: "2018",
    fundingSource: "ADP SCHEMES",
    contractName: "Construction of Work of Restoration of Stone Apron and T-Head Spur Along Surjani Complex",
    briefDescription: "Earth Work Restoration of Apron T-Head Spur Stone Work and Restoration of Aprons",
    contractAmount: "327,522,245 PKR",
    employer: "Executive Engineer Lower Pinyari Division Sujawal",
    address: "Office of the Executive Engineer Lower Pinyari Division Sujawal",
    role: "Prime Contractor"
  },
  {
    startingYear: "2015",
    endingYear: "2017",
    fundingSource: "ADP SCHEMES",
    contractName: "Rehabilitation of Sakro Branch & Infrastructure at Taluka Mirpursakro District Thatta (Contract No. TC/G-55/128/2015 Dated 07 Mar 2015",
    briefDescription: "Earthen Embankment,Stone Filling,RCC,PCC,Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "378,541,314.60 PKR",
    employer: "Executive Engineer Sakro Division Mirpursakro",
    address: "Office of the Executive Engineer Mirpursakro",
    role: "Prime Contractor"
  },
  {
    startingYear: "2015",
    endingYear: "2015",
    fundingSource: "ADP SCHEMES",
    contractName: "Restoration of Aprons and T-Head Spurs along Surjani Complex (Contract No. TC/G-55/667 of 2015 Dated 06 Jul 2015",
    briefDescription: "Earthen Embankment, Approach Bundes, Stone Pitching,Stone Apron,Stone Filling,Excavation (Earthwork) in Soft Soil, Earthwork Filling",
    contractAmount: "138,561,932 PKR",
    employer: "Executive Engineer Lower Pinyari Division,Sujawal",
    address: "Executive Engineer Irrigation Office Sujawal",
    phone: "0298-510421",
    role: "Prime Contractor"
  },
  {
    startingYear: "2015",
    endingYear: "2015",
    fundingSource: "ADP SCHEMES",
    contractName: "Restoration of Aprons and T-Head Spurs along Surjani Complex (Contract No. TC/G-55/667 of 2015 Dated 06 Jul 2015",
    briefDescription: "Earthen Embankment,Approach Bundes, Stone Pitching,Stone Apron,Stone Filling,Excavation (Earthwork) in Soft Soil, Earthwork Filling",
    contractAmount: "138,561,932 PKR",
    employer: "Executive Engineer Lower Pinyari Division,Sujawal",
    address: "Executive Engineer Irrigation Office Sujawal",
    phone: "0298-510421",
    role: "Prime Contractor"
  },
  {
    startingYear: "2015",
    endingYear: "2015",
    fundingSource: "ADP SCHEMES",
    contractName: "Rehabilitation of Sakro Branch & Infrastructure at Taluka Mirpursakro District Thatta (ADP Scheme No:1185) Contract No. TC/G-55/128/215Mirpursakro Dated 09 Mar 2015)",
    briefDescription: "Earthen Embankment, Approach, Stone Pitching,RCC,PCC,Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "378,541,314.60 PKR",
    employer: "Executive Engineer Sakro Division Mirpursakro",
    address: "Executive Engineer Irrigation Office Mirpursakro",
    role: "Prime Contractor"
  },
  {
    startingYear: "2011",
    endingYear: "2014",
    fundingSource: "PSDP SCHEMES",
    contractName: "Construction of Gravity Weir Across Ran Pathani Nai in Lower Kohistan Contract No. TC/G-55/556Jamshoro Dated 24 Oct 2011)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling, RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "196,861,804 PKR",
    employer: "Executive Engineer Small Dams Division Kohistan-II Jamshoro",
    address: "Executive Engineer Small Dams Organization Hyderabad",
    role: "Prime Contractor"
  },
  {
    startingYear: "2011",
    endingYear: "2016",
    fundingSource: "PSDP SCHEMES",
    contractName: "Construction of Gravity Weir Across Ran Pathani Nai in Lower Kohistan Contract No. TC/G-55/556Jamshoro Dated 24 Oct 2011)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling, RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "154,463,244 PKR",
    employer: "Executive Engineer Small Dams Division Kohistan-II Jamshoro",
    address: "Executive Engineer Small Dams Organization Hyderabad",
    role: "Prime Contractor"
  },
  {
    startingYear: "2014",
    endingYear: "2015",
    fundingSource: "ADP SCHEMES",
    contractName: "Rehabilitation of Irrigation Channels and Infrastructures at Taluka Ghorabari District Thatta of Oderolal Branch RD. 150+00 to RD. 201+00 (Package No, 2 ADP Scheme No. 831) Contract No. TC/G-55/114/2014 Mirpursakro Dated 31 Jan 2014)",
    briefDescription: "Earthen Embankment,Approach, Stone Pitching,RCC,PCC,Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "98,181,145.53 PKR",
    employer: "Executive Engineer Sakro Division Mirpursakro",
    address: "Executive Engineer Irrigation Office Mirpursakro",
    role: "Prime Contractor"
  },
  {
    startingYear: "2014",
    endingYear: "2014",
    fundingSource: "ADP SCHEMES",
    contractName: "Remodeling / Resectioning of Darro Branch RD:0 To 30 Contract No. TC/G-55/417 of 2014 Dated 23 May 2014",
    briefDescription: "Earthen Embankment,Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "48,126,012 PKR",
    employer: "Executive Engineer Lower Pinyari Division Sujawal",
    address: "Executive Engineer Irrigation Office Sujawal",
    phone: "0298-510421",
    role: "Prime Contractor"
  },
  {
    startingYear: "2014",
    endingYear: "2014",
    fundingSource: "ADP SCHEMES",
    contractName: "Remodeling/Resectioning of Darro Branch RD:30 To 120 Contract No. TC/G-55/418 of 2014Dated 23 May 2014",
    briefDescription: "Earthen Embankment,Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "49,382,602 PKR",
    employer: "Executive Engineer Lower Pinyari Division Sujawal",
    address: "Executive Engineer Irrigation Office Sujawal",
    phone: "0298-510421",
    role: "Prime Contractor"
  },
  {
    startingYear: "2014",
    endingYear: "2014",
    fundingSource: "ADP SCHEMES",
    contractName: "Remodeling/Resectioning of Pinyari Branch RD:90 To 130 Contract No. TC/G-55/420 of 2014Dated 23 May 2014)",
    briefDescription: "Earthen Embankment, Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "49,831,870 PKR",
    employer: "Executive Engineer Lower Pinyari Division Sujawal",
    address: "Executive Engineer Irrigation Office Sujawal",
    phone: "0298-510421",
    role: "Prime Contractor"
  },
  {
    startingYear: "2014",
    endingYear: "2014",
    fundingSource: "ADP SCHEMES",
    contractName: "Remodeling/Resectioning of Pinyari Branch RD: 130 To 195 Contract No. TC/G-55/421 of 2014 Dated 23 May 2014)",
    briefDescription: "Earthen Embankment, Excavation (Earthwork) in Soft Soil,Earthwork Filling",
    contractAmount: "44,258,944 PKR",
    employer: "Executive Engineer Lower Pinyari Division Sujawal",
    address: "Executive Engineer Irrigation Office Sujawal",
    phone: "0298-510421",
    role: "Prime Contractor"
  },
  {
    startingYear: "2012",
    endingYear: "2014",
    fundingSource: "ADP SCHEMES",
    contractName: "Construction of Gravity Weir Across Kandh Dhoro Nai in Lower Kohistan Contract No. TC/G-55/129Jamshoro Dated 16 Apr 2012)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling, RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "107,615,427 PKR",
    employer: "Executive Engineer Small Dams Division Kohistan-II Jamshoro",
    address: "Executive Engineer Small Dams Organization Hyderabad",
    role: "Prime Contractor"
  },
  {
    startingYear: "2011",
    endingYear: "2013",
    fundingSource: "ADP SCHEMES",
    contractName: "Construction of Gravity Weir Across Mol Nai in Lower Kohistan Contract No. TC/G-55/383Jamshoro Dated 23 Aug 2011)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching,Stone Apron, Stone Filling, RCC,PCC,Excavation (Earthwork) in Hard Rocks & Soft Soil,Earthwork Filling",
    contractAmount: "154,518,812 PKR",
    employer: "Executive Engineer Small Dams Division Kohistan-II Jamshoro",
    address: "Executive Engineer Small Dams Organization Hyderabad",
    role: "Prime Contractor"
  },
  {
    startingYear: "2011",
    endingYear: "2013",
    fundingSource: "ADP SCHEMES",
    contractName: "Recouping of Existing Stone Apron of H.P Bund Mile 3/6+260 to 4/0, Mile 5/7 ot 6/2, 6/6 to 6/7 and Providing new Stone Apron along H.P Bund 3/4 to 3/6+260, 4/0 to 5/5+330 and Recouping Stone Spur(Nose Point) along HP. Bund mile 13/2 (Budhka) (Contract No. TC/G-55/732 of 201 Hyderabad Dated 14 Apr 2011)",
    briefDescription: "Earthen Embankment, Approach Bunds,Stone Pitching,Stone Apron, Stone Filing, Excavation (Earthwork) ni Soft Soil, Earthwork Filing",
    contractAmount: "52,500,334 PKR",
    employer: "Executive Engineer Upper Pinyari Division, Hyderabad",
    address: "Executive Engineer Irrigation Ofice Upper Pinyari Hyderabad",
    role: "Prime Contractor"
  },
   {
    startingYear: "2009",
    endingYear: "2011",
    fundingSource: "ADP SCHEMES",
    contractName: "Raising and Strengthening of Earth Work and Raising Stone Pitching along H.P Bund Mile 3/0 To 6/4 (Contract No. TC/G-55/393 of 2011 Hyderabad Dated 01 Mar 2011)",
    briefDescription: "Earthen Embankment, Approach Bunds, Stone Pitching, Stone Apron, Stone Filling, Excavation (Earthwork) in Soft Soil, Earthwork Filling",
    contractAmount: "52,500,334 PKR",
    employer: "Executive Engineer Upper Pinyari Division, Hyderabad",
    address: "Executive Engineer Irrigation Office Upper Pinyari Hyderabad",
    role: "Prime Contractor"
  },
  {
    startingYear: "2009",
    endingYear: "2011",
    fundingSource: "ADP SCHEMES",
    contractName: "Renovation and Rehabilitation of Existing Building of Director General Health Office at Hyderabad",
    briefDescription: "Construction of New Building Civil Works, Plumbing Work and Electrification Works",
    contractAmount: "16,700,267 PKR",
    employer: "Executive Engineer Provisional Buildings Division Hyderabad",
    role: "Prime Contractor"
  },
  {
    startingYear: "2009",
    endingYear: "2011",
    fundingSource: "ADP SCHEMES",
    contractName: "Consolidation/Improvement and Additional Facilities at Sindh Sports Board Complex Hyderabad (Construction of Mess, Conference Hall & 12 Nos Suits)",
    briefDescription: "Construction of Building Civil Works, Plumbing Work and Electrification Works",
    contractAmount: "42,697,602 PKR",
    employer: "Executive Engineer Provisional Buildings Division Hyderabad",
    role: "Prime Contractor"
  },
  {
    startingYear: "2009",
    endingYear: "2011",
    fundingSource: "ADP SCHEMES",
    contractName: "Establishment of 30 Bedded Hospital Nooriabad District Jamshoro",
    briefDescription: "Construction of New Building Civil Works, Plumbing Work and Electrification Works",
    contractAmount: "16,608,605 PKR",
    employer: "Executive Engineer Provisional Buildings Division Hyderabad",
    role: "Prime Contractor"
  }
]

  const fundingSources = ["All", "World Bank financed", "ADP SCHEMES", "PSDP SCHEMES", "Private sector"];
  const years = ["All", "2022", "2021", "2020", "2019", "2018" , "2017", "2015", "2014", "2012", "2011", "2009"];

  useEffect(() => {
    let filtered = projects;
    
    if (activeFilter !== "All") {
      filtered = filtered.filter(p => p.fundingSource === activeFilter);
    }
    
    if (selectedYear !== "All") {
      filtered = filtered.filter(p => p.startingYear === selectedYear);
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter, selectedYear]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  const calculateTotalValue = () => {
    return filteredProjects.reduce((sum, p) => {
      const value = parseFloat(p.contractAmount.replace(/[^0-9.]/g, ''));
      return sum + value;
    }, 0);
  };

  const stats = [
    { value: projects.length.toString(), label: "Total Projects", icon: Award },
    { value: "Rs. 18.5B+", label: "Portfolio Value", icon: DollarSign },
    { value: "100%", label: "Completion Rate", icon: TrendingUp },
    { value: "World Bank", label: "International Funding", icon: Building2 },
  ];

  return (
    <div className="bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .fade-in-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .section-padding {
          padding: 120px 0;
        }
        
        @media (max-width: 768px) {
          .section-padding {
            padding: 80px 0;
          }
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #1F2937 0%, #111827 100%);
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        
        .filter-btn {
          transition: all 0.3s ease;
        }
        
        .filter-btn.active {
          background: #FBBF24;
          color: #1F2937;
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
        }
        
        .timeline-marker {
          position: relative;
        }
        
        .timeline-marker::before {
          content: '';
          position: absolute;
          left: -24px;
          top: 8px;
          width: 12px;
          height: 12px;
          background: #FBBF24;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #FBBF24;
        }
        
        .timeline-line {
          position: absolute;
          left: -18px;
          top: 0;
          bottom: -32px;
          width: 2px;
          background: linear-gradient(to bottom, #FBBF24 0%, #E5E7EB 100%);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">PROJECT PORTFOLIO</span>
            </div>
          </div>
          
          <h1 className="fade-in-up text-5xl md:text-7xl font-black text-white mb-6 leading-tight stagger-1">
            Our <span className="text-yellow-400">Projects</span>
          </h1>
          
          <p className="fade-in-up text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed stagger-2">
            Delivering excellence in infrastructure development, irrigation systems, and construction projects across Pakistan
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronRight className="rotate-90" size={20} />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="fade-in-up text-center hover-lift" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400 bg-opacity-10 mb-4">
                    <stat.icon className="text-yellow-400" size={28} strokeWidth={2} />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-16  sticky top-0 z-40 border-b border-gray-100 shadow-sm backdrop-blur-lg bg-white bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {/* Funding Source Filter */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Filter className="text-gray-400" size={20} />
                <span className="text-gray-900 font-bold text-lg">Funding Source</span>
                <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                  {filteredProjects.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {fundingSources.map((source, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFilter(source)}
                    className={`filter-btn px-6 py-3 rounded-full font-semibold text-sm border-2 ${
                      activeFilter === source
                        ? 'active'
                        : 'border-gray-200 text-gray-700 hover:border-yellow-400 hover:text-yellow-400 bg-white'
                    }`}
                  >
                    {source}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-3">
              <Calendar className="text-gray-400" size={20} />
              <span className="text-gray-700 font-semibold text-base">Starting Year:</span>
              <div className="flex flex-wrap gap-2">
                {years.map((year, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm ${
                      selectedYear === year
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="fade-in-up"
                style={{animationDelay: `${i * 0.05}s`}}
              >
                <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover-lift">
                  <div className="p-8 md:p-10">
                    <div className="grid md:grid-cols-12 gap-8">
                      {/* Left Section - Timeline & Role */}
                      <div className="md:col-span-3 relative pl-6">
                        <div className="timeline-marker">
                          <div className="timeline-line"></div>
                          
                          {/* Year Range */}
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="text-yellow-400" size={18} strokeWidth={2} />
                              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Timeline</span>
                            </div>
                            <div className="text-2xl font-black text-gray-900">
                              {project.startingYear} - {project.endingYear}
                            </div>
                          </div>

                          {/* Role Badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-4">
                            <Shield className="text-yellow-400" size={16} strokeWidth={2.5} />
                            <span className="text-yellow-600 text-sm font-bold">{project.role}</span>
                          </div>

                          {/* Funding Badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full">
                            <Award className="text-gray-600" size={16} strokeWidth={2} />
                            <span className="text-gray-700 text-xs font-semibold">{project.fundingSource}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Section - Project Details */}
                      <div className="md:col-span-9">
                        {/* Project Title */}
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight hover:text-yellow-400 transition-colors">
                          {project.contractName}
                        </h3>

                        {/* Brief Description */}
                        {project.briefDescription && (
                          <p className="text-gray-600 leading-relaxed mb-6 text-base">
                            {project.briefDescription}
                          </p>
                        )}

                        {/* Info Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                          {/* Employer */}
                          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                                <Briefcase className="text-white" size={20} strokeWidth={2} />
                              </div>
                              <div>
                                <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">Employer</div>
                                <div className="text-sm font-bold text-gray-900 leading-snug">{project.employer}</div>
                              </div>
                            </div>
                          </div>

                          {/* Contract Value */}
                          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                                <DollarSign className="text-gray-900" size={20} strokeWidth={2.5} />
                              </div>
                              <div>
                                <div className="text-xs text-yellow-700 font-semibold mb-1 uppercase tracking-wide">Contract Value</div>
                                <div className="text-lg font-black text-gray-900">{project.contractAmount}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                          <CheckCircle className="text-green-600" size={20} strokeWidth={2.5} />
                          <span className="text-green-700 font-bold text-sm">Successfully Delivered</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#FBBF24_0%,_transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_#F59E0B_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="fade-in-up">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">GET IN TOUCH</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Start Your Next Project
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              With proven expertise in delivering large-scale infrastructure projects, we're ready to bring your vision to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
              to="/contact"
              className="group px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-3 hover:gap-4 shadow-2xl">
                Contact Us Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </Link>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;