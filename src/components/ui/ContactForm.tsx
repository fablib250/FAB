import React, { useState } from 'react';
import { Send } from 'lucide-react';
import HoloCard from './HoloCard';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'submitting', message: '' });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ 
        status: 'success', 
        message: 'Thank you! Your message has been sent successfully.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({ status: 'idle', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <HoloCard>
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800/50 border border-holographic-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800/50 border border-holographic-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800/50 border border-holographic-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-gray-800/50 border border-holographic-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white resize-none"
          ></textarea>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={formStatus.status === 'submitting'}
            className="holo-button flex items-center gap-2"
          >
            {formStatus.status === 'submitting' ? (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
          
          {formStatus.status !== 'idle' && (
            <div className={`text-sm ${formStatus.status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {formStatus.message}
            </div>
          )}
        </div>
      </form>
    </HoloCard>
  );
};

export default ContactForm;