export type TargetStatus = "research-in-progress" | "awaiting-research";

export interface Target {
  /** URL slug under /projects/ */
  slug: string;
  /** Short capability label — describes what we build, by compatibility. */
  name: string;
  /** The proprietary original(s) this reconstruction aims to be compatible with. */
  compatibleWith: string;
  /** Discipline grouping. */
  category: string;
  /** One-line objective. */
  objective: string;
  /** Initial technical approach (from the research inventory). */
  approach: string;
  status: TargetStatus;
  /** Shown on the homepage featured row. */
  featured?: boolean;
  /** Public research dossier, when one exists. */
  dossierUrl?: string;
}

/**
 * The campaign inventory. Mirrors the research target inventory
 * (github.com/exbound/research/blob/main/dossiers/README.md). Status is honest:
 * only targets with real findings are marked research-in-progress.
 */
export const targets: Target[] = [
  {
    slug: "origin",
    name: "Data analysis & plotting",
    compatibleWith: "OriginPro",
    category: "Data analysis",
    objective:
      "An independent Origin-compatible data-analysis and plotting environment — native projects, fitting, transforms, and graphing.",
    approach:
      "Project grammar, fitting operations, transformations, and graph semantics; build on the open LabPlot line where it already fits.",
    status: "research-in-progress",
    featured: true,
    dossierUrl: "https://github.com/exbound/research/blob/main/dossiers/origin.md",
  },
  {
    slug: "materials-testing",
    name: "Materials-testing workstation",
    compatibleWith: "Instron Bluehill / Merlin / Series IX",
    category: "Materials testing",
    objective:
      "An independent materials-testing application for compatible machines: methods, acquisition, calculations, reporting, extensibility.",
    approach:
      "Characterize native experiments, calculations, protocol interfaces, and test-state transitions.",
    status: "awaiting-research",
    featured: true,
  },
  {
    slug: "uv-vis",
    name: "UV-Vis spectroscopy workstation",
    compatibleWith: "Agilent ChemStation (UV-Vis)",
    category: "Spectroscopy",
    objective:
      "An independent workstation for the supported UV-Vis instrument generations.",
    approach: "Instrument protocol, spectral acquisition, processing, calibration.",
    status: "awaiting-research",
    featured: true,
  },
  {
    slug: "chromatography-empower",
    name: "Chromatography control & analysis",
    compatibleWith: "Waters Empower (legacy)",
    category: "Chromatography",
    objective:
      "Replace legacy chromatography control and processing for selected compatible instruments.",
    approach:
      "Instrument command/state protocols; chromatography acquisition and analysis behavior.",
    status: "awaiting-research",
  },
  {
    slug: "thermal-trios",
    name: "Thermal & rheological analysis",
    compatibleWith: "TA TRIOS / Universal Analysis",
    category: "Thermal analysis",
    objective:
      "Independent thermal and rheological analysis, with instrument support expanded per device.",
    approach:
      "Legacy numerical processing, experiment structures, templates, acquisition APIs.",
    status: "awaiting-research",
  },
  {
    slug: "thermal-proteus",
    name: "Thermal analysis workstation",
    compatibleWith: "NETZSCH Proteus",
    category: "Thermal analysis",
    objective:
      "An independent thermal-analysis processing and instrument workstation.",
    approach:
      "Thermal methods, calculations, calibration models, acquisition relationships.",
    status: "awaiting-research",
  },
  {
    slug: "masshunter-quant",
    name: "Quantitative MS analysis",
    compatibleWith: "Agilent MassHunter Quant",
    category: "Mass spectrometry",
    objective:
      "Independent quantitative analytical processing and compatible workflows.",
    approach:
      "Quantitation methods, integrations, calibration curves, batch evaluation.",
    status: "awaiting-research",
  },
  {
    slug: "labsolutions",
    name: "Chromatography workstation",
    compatibleWith: "Shimadzu LabSolutions",
    category: "Chromatography",
    objective:
      "A compatible chromatography workstation with native data and workflow support.",
    approach:
      "Chromatography acquisition, processing, method definitions, instrument interfaces.",
    status: "awaiting-research",
  },
  {
    slug: "highscore",
    name: "Powder-diffraction analysis",
    compatibleWith: "Malvern Panalytical HighScore Plus",
    category: "Diffraction",
    objective: "An independent powder-diffraction analysis environment.",
    approach:
      "Project semantics, phase matching, peak analysis, refinement workflows.",
    status: "awaiting-research",
  },
  {
    slug: "diffrac-eva",
    name: "Diffraction analysis",
    compatibleWith: "Bruker DIFFRAC.EVA",
    category: "Diffraction",
    objective: "An independent diffraction application with project compatibility.",
    approach: "Diffraction-data processing and phase-identification workflows.",
    status: "awaiting-research",
  },
  {
    slug: "wire-raman",
    name: "Raman spectroscopy & mapping",
    compatibleWith: "Renishaw WiRE",
    category: "Raman spectroscopy",
    objective: "An independent Raman spectroscopy and mapping environment.",
    approach: "Raman acquisition formats, mapping, corrections, spectral analysis.",
    status: "awaiting-research",
  },
  {
    slug: "labspec-raman",
    name: "Raman processing",
    compatibleWith: "HORIBA LabSpec",
    category: "Raman spectroscopy",
    objective: "Independent Raman processing and compatible instrument workflows.",
    approach: "Acquisition metadata, map operations, processing, calibration.",
    status: "awaiting-research",
  },
];

export const statusLabel: Record<TargetStatus, string> = {
  "research-in-progress": "Research in progress",
  "awaiting-research": "Awaiting research",
};
