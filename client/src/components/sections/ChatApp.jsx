import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MoreVertical, Paperclip, Smile, Menu, User, Cpu, MessageSquare, Briefcase } from 'lucide-react';

const users = [
    { id: 1, name: 'Support Team', role: 'Technical Assistant', status: 'online', avatar: 'bg-blue-600' },
    { id: 2, name: 'Project AI', role: 'Interface Assistant', status: 'online', avatar: 'bg-blue-500' },
    { id: 3, name: 'Archived', role: 'Legacy Logs', status: 'offline', avatar: 'bg-slate-700' },
];

const initialMessages = {
    1: [
        { id: 1, text: "Welcome to my portfolio! How can I assist you today?", sender: 'them', time: '10:30 AM' },
        { id: 2, text: "I'm looking for more information about your cloud infrastructure projects.", sender: 'me', time: '10:32 AM' },
        { id: 3, text: "Certainly! I can provide details on the architectural decisions and technologies used.", sender: 'them', time: '10:33 AM' },
    ],
    2: [
        { id: 1, text: "Analyzing interface performance metrics...", sender: 'them', time: '9:15 AM' },
        { id: 2, text: "Optimization complete. All components are responsive.", sender: 'me', time: '9:20 AM' },
    ],
    3: []
};

const ChatApp = () => {
    const [activeUser, setActiveUser] = useState(1);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, activeUser]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages(prev => ({
            ...prev,
            [activeUser]: [...(prev[activeUser] || []), newMessage]
        }));
        setInputValue("");

        // Simulate Processing
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const reply = {
                id: Date.now() + 1,
                text: "Thank you for your message. I'm currently processing your request.",
                sender: 'them',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => ({
                ...prev,
                [activeUser]: [...(prev[activeUser] || []), reply]
            }));
        }, 1500);
    };

    return (
        <section id="demo" className="py-32 bg-[#0a0d14] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[180px] animate-blob"></div>
                <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20"
                >
                    <div className="text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                            <MessageSquare size={14} />
                            <span>Interactive Interface</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                            Seamless <br />
                            <span className="text-kinetic">Communication.</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-md text-right font-medium leading-relaxed">
                        Experience a refined communication interface designed for clarity, speed, and professional interaction.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto h-[750px] glass-prof rounded-[48px] overflow-hidden flex border border-white/5 relative"
                >
                    {/* Sidebar */}
                    <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} md:w-80 border-r border-white/5 bg-[#0a0d14]/40 flex flex-col transition-all duration-500 overflow-hidden`}>
                        <div className="p-10 border-b border-white/5 flex justify-between items-center">
                            <h3 className="font-bold text-white text-xs uppercase tracking-widest">Conversations</h3>
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {users.map(user => (
                                <motion.button
                                    key={user.id}
                                    whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.03)' }}
                                    onClick={() => setActiveUser(user.id)}
                                    className={`w-full p-6 rounded-[28px] flex items-center gap-5 transition-all duration-300 border ${activeUser === user.id
                                        ? 'bg-blue-500/5 border-blue-500/20'
                                        : 'border-transparent'
                                        }`}
                                >
                                    <div className="relative">
                                        <div className={`w-14 h-14 rounded-2xl ${user.avatar} flex items-center justify-center text-white font-bold text-xl shadow-xl`}>
                                            <User size={24} />
                                        </div>
                                        {user.status === 'online' && (
                                            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-[3px] border-[#0a0d14] bg-blue-500"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h4 className={`font-bold text-xs uppercase tracking-widest ${activeUser === user.id ? 'text-white' : 'text-slate-400'}`}>
                                            {user.name}
                                        </h4>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{user.role}</p>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col bg-transparent relative">
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/2 backdrop-blur-xl">
                            <div className="flex items-center gap-6">
                                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-slate-400">
                                    <Menu />
                                </button>
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl ${users.find(u => u.id === activeUser)?.avatar} flex items-center justify-center text-white font-bold shadow-lg`}>
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm uppercase tracking-widest leading-none">
                                            {users.find(u => u.id === activeUser)?.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Active Connection</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-8 text-slate-500">
                                <MessageSquare className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                                <User className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                                <MoreVertical className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-10 overflow-y-auto space-y-8 custom-scrollbar">
                            <AnimatePresence mode="wait">
                                {messages[activeUser]?.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className={`flex items-end gap-5 ${msg.sender === 'me' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white border border-white/10
                                            ${msg.sender === 'me' ? 'bg-white/10 text-slate-400' : 'bg-blue-600/20 text-blue-400'}`}>
                                            {msg.sender === 'me' ? 'You' : 'Bot'}
                                        </div>
                                        <div className={`max-w-[70%] p-6 rounded-[32px] text-sm leading-relaxed font-medium border ${msg.sender === 'me'
                                            ? 'bg-white text-black border-white rounded-tr-none shadow-xl'
                                            : 'bg-[#0a0d14] text-slate-300 rounded-tl-none border-white/10'
                                            }`}>
                                            <p>{msg.text}</p>
                                            <div className={`text-[9px] font-bold mt-3 uppercase tracking-widest opacity-40 ${msg.sender === 'me' ? 'text-black' : 'text-slate-500'}`}>
                                                {msg.time} • Verified
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-center gap-3 text-blue-400"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:-.3s]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest ml-2">Typing...</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-10 bg-[#0a0d14]/60 backdrop-blur-3xl border-t border-white/5 mx-4 mb-4 rounded-[40px] border">
                            <form onSubmit={handleSendMessage} className="relative flex items-center gap-6">
                                <button type="button" className="text-slate-500 hover:text-blue-400 transition-colors">
                                    <Paperclip size={20} />
                                </button>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Type your message..."
                                        className="w-full bg-transparent border-b-2 border-white/5 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 transition-all font-sans tracking-wide text-sm"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="p-5 bg-white text-black rounded-2xl shadow-xl hover:bg-blue-50 transition-colors"
                                >
                                    <Send size={20} />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ChatApp;
