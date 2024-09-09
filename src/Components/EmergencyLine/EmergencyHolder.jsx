import React from 'react'
import EmergencyHero from './EmergencyHero'
import EmergencyHelp from './EmergencyHelp'
import EmergencyNumbers from './EmergencyNumbers'
import EmergencyCallLine from './EmergencyCallLine'

const EmergencyHolder = () => {
  return (
    <div>
        <EmergencyHero/>
        
      <EmergencyCallLine />

      <EmergencyHelp />
      <EmergencyNumbers />
    
    </div>
  );
}

export default EmergencyHolder