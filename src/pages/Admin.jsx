import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStoredData, saveStoredData, resetStoredData, initialData } from "../data/portfolioData";
import {
  FolderGit2,
  Briefcase,
  User,
  Plus,
  Trash2,
  Edit3,
  Save,
  RefreshCw,
  Download,
  Upload,
  FileText,
  ArrowUpRight,
  Check,
  Lock
} from "../components/Icons";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("projects");
  const [data, setData] = useState(getStoredData());
  const [savedNotice, setSavedNotice] = useState(false);

  // Project Form State
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    category: "mobile",
    subtitle: "",
    description: "",
    image: "",
    tech: "",
    link: "",
    linkText: "View Project"
  });

  // Experience Form State
  const [editingExpId, setEditingExpId] = useState(null);
  const [expForm, setExpForm] = useState({
    role: "",
    company: "",
    period: "",
    location: "Bangalore, India",
    type: "Work",
    description: "",
    tech: "",
    link: "",
    linkText: "View Link",
    current: false
  });

  // Profile Form State
  const [profileForm, setProfileForm] = useState(data.personalInfo);

  useEffect(() => {
    setData(getStoredData());
    setProfileForm(getStoredData().personalInfo);
  }, []);

  const triggerSaveNotification = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  // --- Project Handlers ---
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projectForm.title) return;

    const techArray = typeof projectForm.tech === "string"
      ? projectForm.tech.split(",").map((t) => t.trim()).filter(Boolean)
      : projectForm.tech;

    const newProject = {
      ...projectForm,
      id: editingProjectId || `proj-${Date.now()}`,
      tech: techArray
    };

    let updatedProjects = [...(data.projects || [])];
    if (editingProjectId) {
      updatedProjects = updatedProjects.map((p) =>
        p.id === editingProjectId ? newProject : p
      );
    } else {
      updatedProjects.unshift(newProject);
    }

    const updatedData = { ...data, projects: updatedProjects };
    setData(updatedData);
    saveStoredData(updatedData);
    triggerSaveNotification();

    // Reset Form
    setEditingProjectId(null);
    setProjectForm({
      title: "",
      category: "mobile",
      subtitle: "",
      description: "",
      image: "",
      tech: "",
      link: "",
      linkText: "View Project"
    });
  };

  const handleEditProject = (proj) => {
    setEditingProjectId(proj.id);
    setProjectForm({
      title: proj.title || "",
      category: proj.category || "mobile",
      subtitle: proj.subtitle || "",
      description: proj.description || "",
      image: proj.image || "",
      tech: Array.isArray(proj.tech) ? proj.tech.join(", ") : proj.tech || "",
      link: proj.link || "",
      linkText: proj.linkText || "View Project"
    });
  };

  const handleDeleteProject = (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    const updatedProjects = data.projects.filter((p) => p.id !== id);
    const updatedData = { ...data, projects: updatedProjects };
    setData(updatedData);
    saveStoredData(updatedData);
    triggerSaveNotification();
  };

  // --- Experience Handlers ---
  const handleSaveExp = (e) => {
    e.preventDefault();
    if (!expForm.role || !expForm.company) return;

    const techArray = typeof expForm.tech === "string"
      ? expForm.tech.split(",").map((t) => t.trim()).filter(Boolean)
      : expForm.tech;

    const newExp = {
      ...expForm,
      id: editingExpId || `exp-${Date.now()}`,
      tech: techArray
    };

    let updatedExperiences = [...(data.experiences || [])];
    if (editingExpId) {
      updatedExperiences = updatedExperiences.map((item) =>
        item.id === editingExpId ? newExp : item
      );
    } else {
      updatedExperiences.unshift(newExp);
    }

    const updatedData = { ...data, experiences: updatedExperiences };
    setData(updatedData);
    saveStoredData(updatedData);
    triggerSaveNotification();

    setEditingExpId(null);
    setExpForm({
      role: "",
      company: "",
      period: "",
      location: "Bangalore, India",
      type: "Work",
      description: "",
      tech: "",
      link: "",
      linkText: "View Link",
      current: false
    });
  };

  const handleEditExp = (item) => {
    setEditingExpId(item.id);
    setExpForm({
      role: item.role || "",
      company: item.company || "",
      period: item.period || "",
      location: item.location || "Bangalore, India",
      type: item.type || "Work",
      description: item.description || "",
      tech: Array.isArray(item.tech) ? item.tech.join(", ") : item.tech || "",
      link: item.link || "",
      linkText: item.linkText || "View Link",
      current: !!item.current
    });
  };

  const handleDeleteExp = (id) => {
    if (!window.confirm("Delete this experience entry?")) return;
    const updatedExperiences = data.experiences.filter((e) => e.id !== id);
    const updatedData = { ...data, experiences: updatedExperiences };
    setData(updatedData);
    saveStoredData(updatedData);
    triggerSaveNotification();
  };

  // --- Profile Handlers ---
  const handleSaveProfile = (e) => {
    e.preventDefault();
    const updatedData = { ...data, personalInfo: profileForm };
    setData(updatedData);
    saveStoredData(updatedData);
    triggerSaveNotification();
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    // Check file size (< 6MB for localStorage safety)
    if (file.size > 6 * 1024 * 1024) {
      alert("Please upload a resume PDF smaller than 6MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const updatedProfile = {
        ...profileForm,
        resumeUrl: dataUrl,
        resumeName: file.name
      };
      setProfileForm(updatedProfile);
      const updatedData = { ...data, personalInfo: updatedProfile };
      setData(updatedData);
      saveStoredData(updatedData);
      triggerSaveNotification();
    };
    reader.readAsDataURL(file);
  };

  const handleResetResume = () => {
    const updatedProfile = {
      ...profileForm,
      resumeUrl: initialData.personalInfo.resumeUrl,
      resumeName: "Default Resume PDF"
    };
    setProfileForm(updatedProfile);
    const updatedData = { ...data, personalInfo: updatedProfile };
    setData(updatedData);
    saveStoredData(updatedData);
    triggerSaveNotification();
  };

  // --- Backup & Export Handlers ---
  const handleExportJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", "portfolioData.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          setData(parsed);
          saveStoredData(parsed);
          setProfileForm(parsed.personalInfo || profileForm);
          triggerSaveNotification();
          alert("Portfolio data imported and updated successfully!");
        } catch (err) {
          alert("Invalid JSON file format.");
        }
      };
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all data to system defaults?")) {
      resetStoredData();
      setData(initialData);
      setProfileForm(initialData.personalInfo);
      triggerSaveNotification();
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Top Header Banner */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-2">
            <Lock size={12} />
            <span>PORTFOLIO ADMIN DASHBOARD</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Content & Project Management Portal
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Easily update projects, experience timeline, and profile information.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {savedNotice && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-pulse">
              <Check size={14} />
              <span>Saved Successfully</span>
            </div>
          )}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-white/10 transition-all"
          >
            <span>View Live Site</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-2">
        {[
          { id: "projects", label: "Projects Manager", icon: FolderGit2 },
          { id: "experience", label: "Experience Timeline", icon: Briefcase },
          { id: "profile", label: "Profile & Socials", icon: User },
          { id: "sync", label: "Backup & JSON Sync", icon: RefreshCw },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-cyan-500 text-zinc-950 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5"
              }`}
            >
              <Icon size={15} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT: PROJECTS */}
      {activeTab === "projects" && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add / Edit Project Form */}
          <div className="lg:col-span-1 glass-card rounded-2xl p-6 border border-white/5 h-fit">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Plus size={18} className="text-cyan-400" />
              <span>{editingProjectId ? "Edit Project" : "Add New Project"}</span>
            </h2>

            <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-400 font-medium mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Myntra Mobile Feature, Booknabe App"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Category</label>
                <select
                  value={projectForm.category}
                  onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="mobile">Mobile Apps</option>
                  <option value="web">Web Systems</option>
                  <option value="design">UI/UX & Branding</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Subtitle / Role</label>
                <input
                  type="text"
                  placeholder="e.g. Mobile Architecture & App Core"
                  value={projectForm.subtitle}
                  onChange={(e) => setProjectForm({ ...projectForm, subtitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe key features, scale, and impact..."
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Image URL (Optional)</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  value={projectForm.image}
                  onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Tech Stack (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="React Native, iOS, Android, Expo"
                  value={projectForm.tech}
                  onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Project Link</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={projectForm.link}
                    onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Link Label</label>
                  <input
                    type="text"
                    placeholder="Play Store / Live App"
                    value={projectForm.linkText}
                    onChange={(e) => setProjectForm({ ...projectForm, linkText: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Save size={14} />
                  <span>{editingProjectId ? "Update Project" : "Save Project"}</span>
                </button>
                {editingProjectId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProjectId(null);
                      setProjectForm({
                        title: "",
                        category: "mobile",
                        subtitle: "",
                        description: "",
                        image: "",
                        tech: "",
                        link: "",
                        linkText: "View Project"
                      });
                    }}
                    className="py-2.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Current Projects List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-white">
                Active Projects ({data.projects ? data.projects.length : 0})
              </h2>
            </div>

            {(!data.projects || data.projects.length === 0) ? (
              <div className="glass-card rounded-2xl p-10 text-center border border-white/5">
                <FolderGit2 size={32} className="mx-auto text-zinc-600 mb-3" />
                <p className="text-zinc-400 text-sm">No projects currently added.</p>
                <p className="text-zinc-500 text-xs mt-1">Use the form on the left to add your first project.</p>
              </div>
            ) : (
              data.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="glass-card rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row items-start justify-between gap-4 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-950 border border-white/10 text-cyan-400 font-semibold">
                        {proj.category}
                      </span>
                      <h3 className="text-base font-bold text-white">{proj.title}</h3>
                    </div>
                    {proj.subtitle && (
                      <p className="text-xs text-cyan-400/90 font-mono mb-1">{proj.subtitle}</p>
                    )}
                    <p className="text-zinc-400 text-xs line-clamp-2 mb-3">{proj.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {proj.tech &&
                        proj.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
                    <button
                      onClick={() => handleEditProject(proj)}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                      title="Edit Project"
                    >
                      <Edit3 size={15} />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB CONTENT: EXPERIENCE */}
      {activeTab === "experience" && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add / Edit Experience Form */}
          <div className="lg:col-span-1 glass-card rounded-2xl p-6 border border-white/5 h-fit">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Plus size={18} className="text-cyan-400" />
              <span>{editingExpId ? "Edit Role / Degree" : "Add Experience / Education"}</span>
            </h2>

            <form onSubmit={handleSaveExp} className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-400 font-medium mb-1">Role / Degree Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Software Development Engineer"
                  value={expForm.role}
                  onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Company / Institution *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Myntra, CareerCarve, IEM"
                  value={expForm.company}
                  onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Period</label>
                  <input
                    type="text"
                    placeholder="Sept 2024 - Present"
                    value={expForm.period}
                    onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 font-medium mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Bangalore, India"
                    value={expForm.location}
                    onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Responsibilities, achievements, impact..."
                  value={expForm.description}
                  onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Tech Stack (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="React Native, iOS, Android"
                  value={expForm.tech}
                  onChange={(e) => setExpForm({ ...expForm, tech: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="currentRole"
                  checked={expForm.current}
                  onChange={(e) => setExpForm({ ...expForm, current: e.target.checked })}
                  className="rounded bg-zinc-950 border-zinc-700 text-cyan-500"
                />
                <label htmlFor="currentRole" className="text-zinc-300">Mark as Current Position</label>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Save size={14} />
                  <span>{editingExpId ? "Update Entry" : "Save Entry"}</span>
                </button>
                {editingExpId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingExpId(null);
                      setExpForm({
                        role: "",
                        company: "",
                        period: "",
                        location: "Bangalore, India",
                        type: "Work",
                        description: "",
                        tech: "",
                        link: "",
                        linkText: "View Link",
                        current: false
                      });
                    }}
                    className="py-2.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Current Experience List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-bold text-white mb-2">
              Timeline Entries ({data.experiences ? data.experiences.length : 0})
            </h2>

            {data.experiences &&
              data.experiences.map((item) => (
                <div
                  key={item.id}
                  className="glass-card rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row items-start justify-between gap-4 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {item.current && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500 text-zinc-950 font-bold">
                          Current
                        </span>
                      )}
                      <h3 className="text-base font-bold text-white">
                        {item.role} <span className="text-cyan-400">@ {item.company}</span>
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 font-mono mb-2">
                      {item.period} • {item.location}
                    </p>
                    <p className="text-zinc-300 text-xs line-clamp-2 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tech &&
                        item.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
                    <button
                      onClick={() => handleEditExp(item)}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                      title="Edit Experience"
                    >
                      <Edit3 size={15} />
                    </button>
                    <button
                      onClick={() => handleDeleteExp(item.id)}
                      className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                      title="Delete Experience"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: PROFILE & SOCIALS */}
      {activeTab === "profile" && (
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 border border-white/5">
          <h2 className="text-xl font-bold text-white mb-6">Edit Profile & Contact Details</h2>

          <form onSubmit={handleSaveProfile} className="space-y-5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-400 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Current Company / Title</label>
                <input
                  type="text"
                  value={profileForm.roleAtCompany}
                  onChange={(e) => setProfileForm({ ...profileForm, roleAtCompany: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-400 font-medium mb-1">Location</label>
                <input
                  type="text"
                  value={profileForm.location}
                  onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Primary Email</label>
                <input
                  type="email"
                  value={profileForm.email}
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 font-medium mb-1">Tagline Pitch</label>
              <input
                type="text"
                value={profileForm.tagline}
                onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500 text-sm"
              />
            </div>

            {/* Resume Management Section */}
            <div className="pt-5 border-t border-white/5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText size={16} className="text-cyan-400" />
                  <span>Resume Management</span>
                </h3>
                {profileForm.resumeUrl && (
                  <a
                    href={profileForm.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:underline"
                  >
                    <span>Preview Current Resume</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>

              <div className="space-y-3 bg-zinc-950/70 p-4 rounded-xl border border-white/5">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1 text-xs">
                    Option A: Upload New Resume PDF File
                  </label>
                  <p className="text-[11px] text-zinc-400 mb-2">
                    Upload a PDF directly. It will be stored and served immediately for all "Download Resume" buttons on the portfolio.
                  </p>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs transition-all shadow-md active:scale-95">
                      <Upload size={14} />
                      <span>Choose PDF File</span>
                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleResumeUpload}
                        className="hidden"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={handleResetResume}
                      className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium border border-white/5 transition-colors"
                    >
                      Reset to Default PDF
                    </button>
                  </div>
                  {profileForm.resumeName && (
                    <p className="text-[11px] text-emerald-400 font-mono mt-2">
                      Active: {profileForm.resumeName}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5">
                  <label className="block text-zinc-300 font-medium mb-1 text-xs">
                    Option B: Or Enter Remote Resume URL / Google Drive Link
                  </label>
                  <input
                    type="text"
                    placeholder="https://drive.google.com/... or https://..."
                    value={profileForm.resumeUrl && !profileForm.resumeUrl.startsWith("data:") ? profileForm.resumeUrl : ""}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        resumeUrl: e.target.value,
                        resumeName: e.target.value ? "Remote Resume Link" : ""
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <h3 className="text-sm font-bold text-white mb-3">Social & Repo URLs</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-zinc-400 mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={profileForm.socials.github}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        socials: { ...profileForm.socials, github: e.target.value }
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={profileForm.socials.linkedin}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        socials: { ...profileForm.socials, linkedin: e.target.value }
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Twitter / X URL</label>
                  <input
                    type="text"
                    value={profileForm.socials.twitter}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        socials: { ...profileForm.socials, twitter: e.target.value }
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
              >
                <Save size={16} />
                <span>Save Profile Information</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB CONTENT: BACKUP & SYNC */}
      {activeTab === "sync" && (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="glass-card rounded-2xl p-8 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-2">Export / Backup Data</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Download your entire current portfolio configuration as a single JSON file. You can commit this to git or restore it anytime.
            </p>
            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download size={16} />
              <span>Download portfolioData.json</span>
            </button>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-2">Import JSON Configuration</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Upload a previously exported <code className="text-cyan-400">portfolioData.json</code> file to restore or mass-update your portfolio.
            </p>
            <input
              type="file"
              accept=".json"
              onChange={handleImportJSON}
              className="block w-full text-xs text-zinc-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-zinc-800 file:text-white hover:file:bg-zinc-700 cursor-pointer"
            />
          </div>

          <div className="glass-card rounded-2xl p-8 border border-rose-500/20 bg-rose-500/5">
            <h2 className="text-xl font-bold text-rose-400 mb-2">Reset to Defaults</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Clear your local modifications and reset all data back to the default state.
            </p>
            <button
              onClick={handleResetDefaults}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold transition-all"
            >
              <Trash2 size={15} />
              <span>Reset to Defaults</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
