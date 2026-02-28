import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSun, 
  FaBolt, 
  FaLeaf, 
  FaArrowRight, 
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaDownload,
  FaCheck,
  FaTimes 
} from 'react-icons/fa';

const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'solar', 'whatsapp'
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  icon = null,
  iconPosition = 'left', // 'left', 'right'
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  animate = true,
  ...props
}) => {
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3'
  };

  // Variant classes using theme from index.css
  const variantClasses = {
    // Primary button - Neon Green
    primary: 'btn-primary',
    
    // Secondary button - Transparent with border
    secondary: 'btn-secondary',
    
    // Outline button - Theme based outline
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all',
    
    // Ghost button - No background, subtle hover
    ghost: 'text-accent hover:bg-accent/10 transition-all',
    
    // Solar gradient button
    solar: 'solar-gradient text-background font-bold hover:opacity-90 transition-all shadow-lg',
    
    // WhatsApp button
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E] transition-all shadow-lg',
    
    // Danger button
    danger: 'bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg',
    
    // Success button
    success: 'bg-green-500 text-white hover:bg-green-600 transition-all shadow-lg',
    
    // Disabled state
    disabled: 'opacity-50 cursor-not-allowed bg-gray-500'
  };

  // Icon components mapping
  const iconMap = {
    sun: FaSun,
    bolt: FaBolt,
    leaf: FaLeaf,
    whatsapp: FaWhatsapp,
    phone: FaPhone,
    email: FaEnvelope,
    download: FaDownload,
    check: FaCheck,
    times: FaTimes,
    arrow: FaArrowRight
  };

  // Get icon component
  const IconComponent = icon ? (typeof icon === 'string' ? iconMap[icon] : icon) : null;

  // Animation variants
  const animations = {
    whileHover: animate ? { 
      scale: 1.05,
      transition: { duration: 0.2 }
    } : {},
    whileTap: animate ? { 
      scale: 0.95,
      transition: { duration: 0.1 }
    } : {},
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={!disabled && !loading ? animations.whileHover : {}}
      whileTap={!disabled && !loading ? animations.whileTap : {}}
      className={`
        rounded-full font-bold uppercase tracking-tighter
        flex items-center justify-center
        transition-all duration-300
        ${sizeClasses[size]}
        ${disabled || loading ? variantClasses.disabled : variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {/* Left Icon */}
          {IconComponent && iconPosition === 'left' && (
            <IconComponent className={`
              ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : size === 'lg' ? 'text-lg' : 'text-xl'}
            `} />
          )}
          
          {/* Children */}
          <span>{children}</span>
          
          {/* Right Icon */}
          {IconComponent && iconPosition === 'right' && (
            <IconComponent className={`
              ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : size === 'lg' ? 'text-lg' : 'text-xl'}
            `} />
          )}
        </>
      )}
    </motion.button>
  );
};

// ========== BUTTON GROUP COMPONENT ==========
export const ButtonGroup = ({ children, orientation = 'horizontal', className = '' }) => {
  return (
    <div className={`
      flex 
      ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'} 
      gap-2
      ${className}
    `}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="flex-1">
          {child}
        </div>
      ))}
    </div>
  );
};

// ========== FLOATING ACTION BUTTON ==========
export const FloatingActionButton = ({
  icon = 'whatsapp',
  position = 'bottom-right',
  onClick,
  tooltip = '',
  ...props
}) => {
  
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  const IconComponent = typeof icon === 'string' ? {
    sun: FaSun,
    bolt: FaBolt,
    whatsapp: FaWhatsapp,
    phone: FaPhone,
    email: FaEnvelope
  }[icon] : icon;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed ${positionClasses[position]} z-50`}
    >
      <button
        onClick={onClick}
        className="w-14 h-14 rounded-full solar-gradient text-background
                   shadow-lg hover:shadow-xl transition-all
                   flex items-center justify-center relative group"
        {...props}
      >
        <IconComponent className="text-2xl" />
        
        {/* Tooltip */}
        {tooltip && (
          <span className="absolute right-full mr-3 px-3 py-1 
                         bg-background text-white text-sm rounded-lg
                         opacity-0 group-hover:opacity-100 transition-opacity
                         whitespace-nowrap shadow-lg border border-white/10">
            {tooltip}
          </span>
        )}
      </button>
    </motion.div>
  );
};

// ========== SOCIAL MEDIA BUTTONS ==========
export const SocialButton = ({ platform, href, ...props }) => {
  const platforms = {
    whatsapp: { icon: FaWhatsapp, color: 'bg-[#25D366]', hover: 'hover:bg-[#128C7E]' },
    facebook: { icon: FaFacebook, color: 'bg-[#1877F2]', hover: 'hover:bg-[#166FE5]' },
    instagram: { icon: FaInstagram, color: 'bg-[#E4405F]', hover: 'hover:bg-[#D1324D]' },
    twitter: { icon: FaTwitter, color: 'bg-[#1DA1F2]', hover: 'hover:bg-[#1A8CD8]' },
    linkedin: { icon: FaLinkedin, color: 'bg-[#0A66C2]', hover: 'hover:bg-[#095AA8]' },
    youtube: { icon: FaYoutube, color: 'bg-[#FF0000]', hover: 'hover:bg-[#CC0000]' }
  };

  const platformData = platforms[platform] || platforms.whatsapp;
  const IconComponent = platformData.icon;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className={`
        w-10 h-10 rounded-full ${platformData.color} ${platformData.hover}
        flex items-center justify-center text-white
        transition-all shadow-lg
      `}
      {...props}
    >
      <IconComponent className="text-lg" />
    </motion.a>
  );
};

// ========== EXAMPLE USAGE COMPONENT ==========
export const ButtonShowcase = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Button Variants */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold theme-text-primary">Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="solar">Solar Gradient</Button>
          <Button variant="whatsapp" icon="whatsapp">WhatsApp</Button>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold theme-text-primary">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* Icons */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold theme-text-primary">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon="sun" variant="solar">Solar Energy</Button>
          <Button icon="bolt" variant="primary">Quick Quote</Button>
          <Button icon="leaf" variant="secondary" iconPosition="right">Eco Friendly</Button>
          <Button icon="download" variant="outline">Download Brochure</Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold theme-text-primary">Button States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Normal</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="success" icon="check">Success</Button>
          <Button variant="danger" icon="times">Danger</Button>
        </div>
      </div>

      {/* Full Width */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold theme-text-primary">Full Width</h3>
        <Button variant="primary" fullWidth>Full Width Button</Button>
      </div>

      {/* Button Group */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold theme-text-primary">Button Group</h3>
        <ButtonGroup>
          <Button variant="primary">Save</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="ghost">Delete</Button>
        </ButtonGroup>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton 
        icon="whatsapp" 
        position="bottom-right" 
        tooltip="Chat with us!"
        onClick={() => window.open('https://wa.me/1234567890')}
      />
    </div>
  );
};

export default Button;