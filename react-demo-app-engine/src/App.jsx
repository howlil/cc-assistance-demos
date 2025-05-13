import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 p-8 overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-300 via-cyan-300 to-blue-400 animate-pulse"></div>
      </div>
      
      {/* Floating animated elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full blur-xl opacity-60 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-xl opacity-60" 
           style={{animation: 'float 6s ease-in-out infinite'}}>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full blur-xl opacity-60"
           style={{animation: 'spin 15s linear infinite'}}>
      </div>
      
      {/* Additional animated elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-emerald-300 rounded-full blur-lg opacity-40"
           style={{animation: 'float-reverse 4s ease-in-out infinite'}}>
      </div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-cyan-400 rounded-full blur-lg opacity-40 animate-ping">
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-6xl mx-auto">
        {/* Glassmorphism card with entrance animation */}
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl w-full"
             style={{animation: 'fade-in-up 1s ease-out'}}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image container with hover effect */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-1">
              <img 
                src="/api/placeholder/300/300" 
                alt="Inspirational" 
                className="w-64 h-64 object-cover rounded-xl"
                style={{animation: 'fade-in 1.5s ease-out'}}
              />
              {/* Decorative glass overlay with shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl pointer-events-none"
                   style={{animation: 'shimmer 3s ease-in-out infinite'}}>
              </div>
            </div>
            
            {/* Quote container with slide animation */}
            <div className="flex-1 text-center md:text-left"
                 style={{animation: 'slide-in 1s ease-out 0.3s backwards'}}>
              <svg className="w-12 h-12 mb-4 text-white/30 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <blockquote className="text-2xl md:text-3xl font-light text-white mb-6"
                          style={{animation: 'text-reveal 1.5s ease-out 0.5s backwards'}}>
                The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.
              </blockquote>
              
              <cite className="text-lg text-white/70 font-medium"
                    style={{animation: 'fade-in 1s ease-out 1s backwards'}}>
                — Steve Jobs
              </cite>
              
              {/* Animated decorative line */}
              <div className="mt-6 h-0.5 bg-gradient-to-r from-white/50 to-transparent mx-auto md:mx-0"
                   style={{animation: 'expand-width 1s ease-out 1.2s backwards', width: '6rem'}}></div>
            </div>
          </div>
          
          {/* Bottom decorative element with pulse */}
          <div className="mt-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-center transform transition-all duration-300 hover:scale-105">
            <p className="text-white/60 text-sm">Daily Inspiration</p>
            <div className="flex justify-center gap-2 mt-2">
              <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(0.95); }
        }
        
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand-width {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default App;