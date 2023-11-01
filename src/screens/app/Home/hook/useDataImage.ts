export const useDataImage = () => {
  const images = [
    { 
      source: require('@assets/image/home/minions.png'),
      description: '1ª imagem de um minions'
    },

    { 
      source: require('@assets/image/home/hamburger.png'),
      description: '1ª imagem de um hambúrguer'
    },

    { 
      source: require('@assets/image/home/milk-shake.png'),
      description: '1ª imagem de um milk-shake'
    },

    { 
      source: require('@assets/image/home/bandeiras.png'),
      description: '1ª imagem de uma bandeira'
    },

    { 
      source: require('@assets/image/home/hamburger.png'),
      description: '2ª imagem de um hambúrguer'
    },

    { 
      source: require('@assets/image/home/minions.png'),
      description: '2ª imagem de um minions'
    },

    { 
      source: require('@assets/image/home/milk-shake.png'),
      description: '2ª imagem de um shake'
    },

    { 
      source: require('@assets/image/home/bandeiras.png'),
      description: '2ª imagem de uma bandeira'
    }

  ];
  
  return { images };
}