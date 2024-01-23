import { useMotion } from '@vueuse/motion'

export function FadeUp(target) {
    useMotion(target,{
        initial:{y: 100,opacity: 0},
        visible:{ 
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 80,
                mass: 0.5,
            },
        }
      })
    
}
export function FadeLeft(target) {
    useMotion(target,{
        initial:{x: -100,opacity: 0},
        visible:{ 
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 80,
                mass: 0.5,
            },
        }
      })
    
}
export function FadeRight(target) {
    useMotion(target,{
        initial:{x: 100,opacity: 0},
        visible:{ 
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 80,
                mass: 0.5,
            },
        }
      })
    
}
export function FadeIn(target) {
    useMotion(target,{
        initial:{opacity: 0},
        visible:{
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 80,
                mass: 0.5,
            },
        }
      })
    
}
export function ScaleUp(target) {
    useMotion(target,{
        initial:{scale: .8},
        visible:{
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 80,
                mass: 0.5,
            },
        }
      })
    
}