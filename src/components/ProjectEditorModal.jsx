import Modal from "react-modal";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaFileCode, FaFolderOpen, FaSearch, FaCodeBranch } from "react-icons/fa";
import { VscSplitHorizontal, VscLayoutSidebarLeft } from "react-icons/vsc";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#1e1e1e', // VS Code Dark Bg
        border: '1px solid #333',
        borderRadius: '0.5rem',
        padding: '0',
        maxWidth: '95vw',
        maxHeight: '95vh',
        width: '85vw', // Wider for better code view
        height: '85vh', // Taller as requested
        overflow: 'hidden', // Internal scrolling managed by editor area
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 100,
    },
};

Modal.setAppElement('#root');

const ProjectEditorModal = ({ project, isOpen, onRequestClose }) => {
    if (!project) return null;

    // Fake file structure for sidebar
    const files = [
        { name: 'README.md', active: true, icon: <FaFileCode className="text-blue-400" /> },
        { name: 'package.json', active: false, icon: <FaFileCode className="text-yellow-400" /> },
        { name: 'src', type: 'folder', icon: <FaFolderOpen className="text-gray-400" /> },
        { name: '.gitignore', active: false, icon: <FaFileCode className="text-gray-500" /> },
    ];

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Project Editor"
        >
            {/* VS Code Window Container */}
            <div className="flex flex-col h-full font-sans text-sm text-gray-300 bg-[#1e1e1e]">

                {/* Title Bar */}
                <div className="h-8 bg-[#333333] flex items-center justify-between px-2 select-none">
                    <div className="flex items-center gap-2">
                        {/* Window Controls */}
                        <div className="flex gap-1.5 ml-2">
                            <button onClick={onRequestClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"></button>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div className="text-gray-400 text-xs text-center flex-1 truncate px-4">
                        {project.title.replace(/\s+/g, '-').toLowerCase()} — README.md — Visual Studio Code
                    </div>
                    <div className="flex items-center text-gray-400 gap-3 mr-2">
                        <VscLayoutSidebarLeft className="cursor-pointer hover:text-white" />
                        <VscSplitHorizontal className="cursor-pointer hover:text-white" />
                    </div>
                </div>

                {/* Main Layout: Sidebar + Editor */}
                <div className="flex flex-1 overflow-hidden">

                    {/* Activity Bar (Far Left) */}
                    <div className="w-12 bg-[#333333] flex flex-col items-center py-2 gap-4 text-gray-500 border-r border-[#252526]">
                        <FaFileCode className="text-white text-xl cursor-pointer" title="Explorer" />
                        <FaSearch className="hover:text-white text-xl cursor-pointer" />
                        <FaCodeBranch className="hover:text-white text-xl cursor-pointer" />
                        <div className="mt-auto mb-2 opacity-50 hover:opacity-100">
                            <div className="w-6 h-6 rounded-full bg-gray-500"></div>
                        </div>
                    </div>

                    {/* Explorer Sidebar */}
                    <div className="w-48 bg-[#252526] flex flex-col border-r border-[#1e1e1e] hidden md:flex">
                        <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wide">Explorer</div>
                        <div className="px-2">
                            <div className="flex items-center gap-1 text-xs font-bold text-blue-400 mb-1 cursor-pointer">
                                <span className="transform rotate-90">›</span>
                                {project.title.toUpperCase().slice(0, 10)}...
                            </div>
                            <div className="pl-4 space-y-0.5">
                                {files.map((file, idx) => (
                                    <div key={idx} className={`flex items-center gap-2 px-2 py-1 cursor-pointer ${file.active ? 'bg-[#37373d] text-white' : 'text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-200'}`}>
                                        {file.icon}
                                        <span className="truncate">{file.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="flex-1 flex flex-col bg-[#1e1e1e]">
                        {/* Tabs */}
                        <div className="flex bg-[#252526] h-9">
                            <div className="bg-[#1e1e1e] text-white px-3 py-2 text-xs border-t-2 border-blue-500 flex items-center gap-2 min-w-[120px]">
                                <span className="text-blue-400">ℹ</span> README.md
                                <FaTimes className="ml-auto hover:bg-gray-700 rounded p-0.5 cursor-pointer" onClick={onRequestClose} />
                            </div>
                        </div>

                        {/* Editor Content (Markdown Preview Style) */}
                        <div className="flex-1 overflow-y-auto p-8 font-mono">
                            <div className="max-w-3xl mx-auto space-y-6">
                                {/* H1 Title */}
                                <div>
                                    <h1 className="text-3xl font-bold text-blue-400 mb-2"># {project.title}</h1>
                                    <div className="h-0.5 w-full bg-gray-700"></div>
                                </div>

                                {/* Dynamic Image Bento Grid */}
                                <div className="rounded-lg overflow-hidden border border-gray-700 bg-[#1e1e1e]">
                                    {(() => {
                                        const images = project.images && project.images.length > 0 ? project.images : [project.img];
                                        const count = images.length;

                                        if (count === 1) {
                                            return (
                                                <img
                                                    src={images[0]}
                                                    alt={project.title}
                                                    className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition-opacity"
                                                />
                                            );
                                        }

                                        if (project.layout === "portrait-4") {
                                            return (
                                                <div className="grid grid-cols-4 gap-2 h-96">
                                                    {images.slice(0, 4).map((img, idx) => (
                                                        <div key={idx} className="relative group overflow-hidden h-full">
                                                            <img
                                                                src={img}
                                                                alt={`Portrait ${idx + 1}`}
                                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-500"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        }

                                        if (count === 2) {
                                            return (
                                                <div className="grid grid-cols-2 gap-1 h-64">
                                                    {images.map((img, idx) => (
                                                        <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                                                    ))}
                                                </div>
                                            );
                                        }

                                        if (count === 3) {
                                            return (
                                                <div className="grid grid-cols-3 grid-rows-2 gap-2 h-80">
                                                    {/* Main Large Image (Left) */}
                                                    <div className="col-span-2 row-span-2 relative group">
                                                        <img src={images[0]} alt="Main Screenshot" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    {/* Stacked Side Images (Right) */}
                                                    <div className="col-span-1 row-span-1 relative group">
                                                        <img src={images[1]} alt="Secondary Screenshot 1" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <div className="col-span-1 row-span-1 relative group">
                                                        <img src={images[2]} alt="Secondary Screenshot 2" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </div>
                                            );
                                        }

                                        // 4 or more items - 2x2 Grid (or Masonry-ish)
                                        return (
                                            <div className="grid grid-cols-2 grid-rows-2 gap-2 h-80">
                                                {images.slice(0, 4).map((img, idx) => (
                                                    <div key={idx} className="relative group overflow-hidden">
                                                        <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-500" />
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Tech Stack Block (Moved Up) */}
                                <div>
                                    <h2 className="text-xl font-bold text-purple-400 mb-3">## Tech Stack</h2>
                                    <div className="pl-4 border-l-2 border-gray-700 space-y-2">
                                        {project.tech?.map((t, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <span className="text-gray-500">-</span>
                                                <span className="text-[#4ec9b0]">{t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Links Block (Moved Up & Cleaned) */}
                                <div>
                                    <h2 className="text-xl font-bold text-yellow-400 mb-3">## Links</h2>
                                    <div className="flex gap-4">
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                                                [<FaExternalLinkAlt size={12} /> Live Demo]
                                            </a>
                                        )}
                                        {project.githubLink ? (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                                                [<FaGithub size={12} /> Source Code]
                                            </a>
                                        ) : (
                                            <span className="text-gray-500 italic flex items-center gap-2">
                                                [<FaGithub size={12} /> Private Repository]
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Description Block with Simple Markdown Parser */}
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    {project.description.split('\n').map((line, index) => {
                                        // Helper to parse inline bolding (**text**)
                                        const parseContent = (text) => {
                                            const parts = text.split(/(\*\*.*?\*\*)/g);
                                            return parts.map((part, i) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return <span key={i} className="text-cyan-400 font-bold">{part.slice(2, -2)}</span>;
                                                }
                                                return part;
                                            });
                                        };

                                        // Header H2
                                        if (line.startsWith('## ')) {
                                            return <h2 key={index} className="text-xl font-bold text-blue-400 mt-6 mb-2">{line.replace('## ', '')}</h2>;
                                        }

                                        // Bold Sub-Header (starts with **) - New distinct formatting
                                        if (line.trim().startsWith('**') && !line.trim().startsWith('-')) {
                                            return (
                                                <div key={index} className="text-purple-400 font-bold mt-4 mb-1">
                                                    {parseContent(line)}
                                                </div>
                                            );
                                        }

                                        // List Item with Bold Key (e.g., - **Key**: Value)
                                        if (line.trim().startsWith('- **')) {
                                            const parts = line.split('**:');
                                            if (parts.length > 1) {
                                                return (
                                                    <div key={index} className="ml-4 flex gap-2">
                                                        <span className="text-purple-300 min-w-fit">{parts[0].replace('- **', '')}:</span>
                                                        <span className="text-[#ce9178]">{parseContent(parts.slice(1).join('**:'))}</span>
                                                    </div>
                                                );
                                            }
                                        }

                                        // Standard List Item
                                        if (line.trim().startsWith('- ')) {
                                            return <div key={index} className="ml-4 text-[#ce9178]">• {parseContent(line.replace('- ', ''))}</div>;
                                        }

                                        // Empty line
                                        if (line.trim() === '') {
                                            return <br key={index} />;
                                        }

                                        // Standard Paragraph
                                        return <p key={index} className="text-[#ce9178]">{parseContent(line)}</p>;
                                    })}
                                </div>

                                {/* Terminating Cursor */}
                                <div className="pt-8 animate-pulse text-cyan-500">
                                    |
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* Status Bar */}
                <div className="h-6 bg-[#007acc] text-white flex items-center px-2 justify-between text-xs select-none">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1"><FaCodeBranch size={10} /> main</div>
                        <div className="flex items-center gap-1">0 errors, 0 warnings</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block">Markdown</div>
                        <div>UTF-8</div>
                        <div className="flex items-center gap-1"><span className="text-xs">Prettier</span></div>
                    </div>
                </div>

            </div>
        </Modal>
    );
};

export default ProjectEditorModal;
