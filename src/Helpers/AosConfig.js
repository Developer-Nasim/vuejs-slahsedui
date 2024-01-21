import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css' 
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function 
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes: 
    delay: 2000, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms 
  
  })  