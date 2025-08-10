import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formData = new FormData(e.target);
    
    const submitData = {
      access_key: "729fb70a-30c9-45bb-8e5c-bfc45733c13e",
      from_name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('mobile'),
      message: formData.get('message'),
      subject: "New Contact Form Submission",
      botcheck: false,
      type: 'contact',
      domain: window.location.hostname
    };
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submitData)
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        if (data.message.includes('spam')) {
          setSubmitStatus('spam');
        } else {
          setSubmitStatus('error');
        }
        console.error('Form submission error:', data);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-black text-5xl text-center mb-12 font-[Open Sans] font-medium">
            Contact Me
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 backdrop-blur-sm rounded-lg p-8 border-[1.5px] border-gray-200">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                required 
                name="name"
                className="w-full bg-white text-black placeholder-gray-500 px-4 py-3 border-[1.5px] border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors" 
              />
              
              <input 
                type="email" 
                placeholder="Email" 
                required 
                name="email"
                className="w-full bg-white text-black placeholder-gray-500 px-4 py-3 border-[1.5px] border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors" 
              />
              
              <input 
                type="tel" 
                placeholder="Mobile" 
                required 
                name="mobile"
                className="w-full bg-white text-black placeholder-gray-500 px-4 py-3 border-[1.5px] border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors" 
              />
              
              <textarea 
                placeholder="Write Your Message" 
                required 
                name="message"
                rows="4"
                className="w-full bg-white text-black placeholder-gray-500 px-4 py-3 border-[1.5px] border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors resize-none" 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-black text-white font-medium py-3 px-6 rounded-md border-[1.5px] border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center mt-4">
                Message sent successfully!
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center mt-4">
                Something went wrong. Please try again.
              </p>
            )}
            {submitStatus === 'spam' && (
              <p className="text-yellow-600 text-center mt-4">
                Message was marked as spam. Please try with valid details.
              </p>
            )}
          </form>

          <div className="mt-8 text-center">
            <a
              href="https://buymeacoffee.com/strtux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFDD00] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#FFDD00]/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              Buy me a coffee
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
