module.exports = (async () => {
    const { getDefaultConfig } = await import('expo/metro-config.js'); // Cambio aquí
    const defaultConfig = await getDefaultConfig(__dirname);
  
    return {

      resolver: {
    
        enableDangerousRequireCycles: true,
      },
    };
  })();
  