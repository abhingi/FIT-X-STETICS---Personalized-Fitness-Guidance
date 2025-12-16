const LOCALIZED_TEXT = {
    'en': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - Personalized Fitness Guidance',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "Your personalized journey to peak health and wellness. Click 'INPUT' to begin your assessment.",
        'landing-btn': 'Get Started',
        'lang-label': 'Language:',
        
        // Navigation
        'nav-home': 'HOME',
        'nav-input': 'INPUT',
        'nav-diet': 'DIET PLAN',
        'nav-exercise': 'EXERCISE PLAN',
        'nav-admin-info': 'ADMIN INFO',
        'nav-reviews': 'REVIEWS',
        'nav-admin-login': 'ADMIN LOGIN',

        // Input Form
        'input-header': 'ENTER YOUR DETAILS',
        'label-name': 'NAME',
        'label-height': 'HEIGHT (CM)',
        'label-weight': 'WEIGHT (KG)',
        'label-age': 'AGE (YEARS)',
        'label-gender': 'GENDER',
        'label-preference': 'DIET PREFERENCE',
        'gender-male': 'Male',
        'gender-female': 'Female',
        'gender-trans': 'Trans',
        'gender-other': 'Not Specified (Homo/Other)',
        'pref-veg': 'Vegetarian',
        'pref-nonveg': 'Non-Vegetarian',
        'pref-both': 'Both', // ADDED
        'pref-select': 'Select...',
        'input-submit-btn': 'GENERATE PLAN',
        'input-reset-btn': 'RESET FORM',
        'input-alert-invalid': 'Please fill in all fields with valid numbers.',
        
        // Results/Plan Headers
        'bmi-header': 'BMI RESULT',
        'diet-plan-header': 'YOUR PERSONALIZED DIET PLAN',
        'exercise-plan-header': 'YOUR PERSONALIZED EXERCISE PLAN',

        // BMI Statuses
        'status-underweight': 'Underweight',
        'status-normal': 'Normal Weight',
        'status-overweight': 'Overweight',
        'status-obese': 'Obese',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': 'Note: Calorie goals are estimates. Adjust based on your activity level and doctor consultation.',
        'diet-disclaimer': '*Always consult a certified nutritionist before making major dietary changes.',
        'exercise-disclaimer': '*Always consult a doctor before starting any new fitness regimen.',

        // Review Page
        'review-header': 'USER REVIEWS & FEEDBACK',
        'label-reviewer-name': 'YOUR NAME',
        'label-review-text': 'YOUR FEEDBACK',
        'review-submit-btn': 'SUBMIT REVIEW',
        'review-list-header': 'Latest Reviews',
        'review-new-tag': '(New Review)',
        'review-alert-success': 'Thank you for your feedback! Your review has been added locally.',

        // Admin
        'admin-login-header': 'ADMIN LOGIN',
        'label-admin-id': 'ADMIN USER ID',
        'label-admin-password': 'PASSWORD',
        'admin-login-btn': 'LOGIN',
        'admin-data-header': 'USER METRICS DATABASE',
        'admin-auth-text': 'Authenticating...',
        'admin-logout-btn': 'Logout',

        // Dynamic Content (Required for JS functionality)
        'bmr-unit': 'Calories/day',
        'diet-table-meal': 'Meal',
        'diet-table-veg': 'Vegetarian Option',
        'diet-table-nonveg': 'Non-Vegetarian Option',
        'diet-table-focus': 'Focus',
        'meal-breakfast': 'Breakfast',
        'meal-lunch': 'Lunch',
        'meal-snack': 'Snack',
        'meal-dinner': 'Dinner',
        'meal-veg-b': 'Oats with berries and nuts (high fiber)',
        'meal-nonveg-b': '4 Egg Whites + 2 Whole Eggs, Multigrain Toast',
        'meal-veg-l': 'Lentil soup/Dal, Brown Rice, large green salad',
        'meal-nonveg-l': 'Grilled Chicken/Fish, large portion of mixed vegetables',
        'meal-veg-s': 'Apple/Banana with 10 almonds',
        'meal-nonveg-s': 'Handful of almonds or a whey protein shake',
        'meal-veg-d': 'Paneer Bhurji with whole-wheat roti',
        'meal-nonveg-d': 'Grilled Fish or Turkey, Steamed veggies',
        'focus-protein-carb': 'High Protein, Complex Carbs',
        'focus-balanced': 'Balanced Meal, Essential Nutrients',
        'focus-fats-energy': 'Healthy Fats & Quick Energy',
        'focus-lean-carb': 'Lean Protein, Light Carbs',
        'nutrient-goals-header': 'Nutrient Goals:',
        'daily-cal-label': 'Estimated Daily Calories:',
        'cal-goal-note': 'for modest weight loss/maintenance',
        'target-protein-label': 'Target Protein:',
        'protein-unit': 'grams/day',
        'hydration-label': 'Hydration:',
        'hydration-unit': 'Litres of water daily.',
        'goal-normal': 'Goal:',
        'goal-muscle': 'Muscle Building',
        'cardio-label': 'Cardio',
        'cardio-duration': 'minutes',
        'cardio-run': 'Running',
        'cardio-hiit': 'High-Intensity Interval Training (HIIT)',
        'strength-label': 'Strength',
        'strength-normal-desc': 'Full-body routine focusing on compound movements to maximize muscle growth.',
        'ex-table-ex': 'Exercise',
        'ex-table-sets': 'Sets',
        'ex-table-reps': 'Reps/Duration',
        'ex-table-focus': 'Primary Focus',
        'ex-squats': 'Squats',
        'ex-reps': 'reps',
        'ex-pushups': 'Push-ups',
        'ex-maxreps': 'Max reps',
        'ex-rows': 'Dumbbell Rows',
        'ex-reps-side': 'reps/side',
        'ex-plank': 'Plank',
        'ex-seconds': 'seconds',
        'ex-focus-legs': 'Legs, Core',
        'ex-focus-chest': 'Chest, Triceps, Shoulders',
        'ex-focus-back': 'Back, Biceps',
        'ex-focus-core': 'Core Stability',
        'goal-overweight': 'Goal:',
        'goal-weightloss': 'Weight Loss',
        'cardio-walk': 'Brisk Walking',
        'cardio-cycle': 'Cycling',
        'cardio-elliptical': 'Elliptical',
        'cardio-tip': 'Focus on maintaining an elevated heart rate.',
        'strength-overweight-desc': 'Bodyweight exercises only. Use chair/wall support as needed.',
        'ex-title': 'Exercises',
        'ex-wall-pushups': 'Wall Push-ups',
        'ex-chair-squats': 'Chair Squats',
        'ex-sit-stand': 'sit to stand',
        'ex-knee-raises': 'Knee-raises',
        'ex-marching': 'marching in place',
        'ex-tip-title': 'Tip',
        'ex-tip-text': 'Always warm up and cool down for 10 minutes. Hydration is key. Consistency is more important than intensity at this stage.',
        'fitness-level': 'Fitness Level:',
        'level-beginner': 'Beginner/Intermediate',
        'schedule-suggestion': 'Weekly Schedule Suggestion:',
        'day-mon': 'Monday',
        'day-tue': 'Tuesday',
        'day-wed': 'Wednesday',
        'day-thu': 'Thursday',
        'day-fri': 'Friday',
        'day-sat': 'Saturday',
        'day-sun': 'Sunday',
        'act-strength': 'Full Body Strength',
        'act-cardio': 'Cardio',
        'act-rest': 'Rest/Active Recovery',
        'act-long-cardio': 'Long Cardio Session',
        'admin-col-name': 'Name',
        'admin-col-age': 'Age',
        'admin-col-gender': 'Gender',
        'admin-col-height': 'Height (cm)',
        'admin-col-weight': 'Weight (kg)',
        'admin-col-bmi': 'BMI',
        'admin-col-bmr': 'BMR (cal)',
        'admin-col-diet': 'Diet Pref',
        'admin-col-timestamp': 'Timestamp',
    },
    'hi': {
        // Meta & Landing
        'meta-title': 'फिट-एक्स-स्टेटिक्स - व्यक्तिगत फिटनेस मार्गदर्शन',
        'landing-title': 'फिट-एक्स-स्टेटिक्स',
        'landing-subtitle': "बेहतरीन स्वास्थ्य और कल्याण के लिए आपकी व्यक्तिगत यात्रा। अपना आकलन शुरू करने के लिए 'INPUT' पर क्लिक करें।",
        'landing-btn': 'शुरुआत करें',
        'lang-label': 'भाषा:',

        // Navigation
        'nav-home': 'होम',
        'nav-input': 'इनपुट',
        'nav-diet': 'डाइट प्लान',
        'nav-exercise': 'एक्सरसाइज प्लान',
        'nav-admin-info': 'एडमिन जानकारी',
        'nav-reviews': 'रिव्यू',
        'nav-admin-login': 'एडमिन लॉगिन',

        // Input Form
        'input-header': 'अपने विवरण दर्ज करें',
        'label-name': 'नाम',
        'label-height': 'ऊँचाई (सेमी)',
        'label-weight': 'वज़न (किलो)',
        'label-age': 'आयु (वर्ष)',
        'label-gender': 'लिंग',
        'label-preference': 'आहार प्राथमिकता',
        'gender-male': 'पुरुष',
        'gender-female': 'महिला',
        'gender-trans': 'ट्रांस',
        'gender-other': 'निर्दिष्ट नहीं (होमो/अन्य)',
        'pref-veg': 'शाकाहारी',
        'pref-nonveg': 'मांसाहारी',
        'pref-both': 'दोनों', // ADDED
        'pref-select': 'चुनें...',
        'input-submit-btn': 'प्लान जनरेट करें',
        'input-reset-btn': 'फॉर्म रीसेट करें',
        'input-alert-invalid': 'कृपया सभी क्षेत्रों को मान्य संख्याओं के साथ भरें।',
        
        // Results/Plan Headers
        'bmi-header': 'बीएमआई परिणाम',
        'diet-plan-header': 'आपकी व्यक्तिगत डाइट प्लान',
        'exercise-plan-header': 'आपकी व्यक्तिगत एक्सरसाइज प्लान',

        // BMI Statuses
        'status-underweight': 'कम वज़न',
        'status-normal': 'सामान्य वज़न',
        'status-overweight': 'अधिक वज़न',
        'status-obese': 'मोटापा',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': 'ध्यान दें: कैलोरी लक्ष्य अनुमानित हैं। अपनी गतिविधि स्तर और डॉक्टर से परामर्श के आधार पर समायोजित करें।',
        'diet-disclaimer': '*प्रमुख आहार परिवर्तन करने से पहले हमेशा एक प्रमाणित पोषण विशेषज्ञ से सलाह लें।',
        'exercise-disclaimer': '*कोई भी नया फिटनेस शासन शुरू करने से पहले हमेशा डॉक्टर से सलाह लें।',

        // Review Page
        'review-header': 'उपयोगकर्ता समीक्षाएं और प्रतिक्रिया',
        'label-reviewer-name': 'आपका नाम',
        'label-review-text': 'आपकी प्रतिक्रिया',
        'review-submit-btn': 'रिव्यू सबमिट करें',
        'review-list-header': 'नवीनतम समीक्षाएं',
        'review-new-tag': '(नई समीक्षा)',
        'review-alert-success': 'आपकी प्रतिक्रिया के लिए धन्यवाद! आपका रिव्यू स्थानीय रूप से जोड़ा गया है।',

        // Admin
        'admin-login-header': 'एडमिन लॉगिन',
        'label-admin-id': 'एडमिन यूजर आईडी',
        'label-admin-password': 'पासवर्ड',
        'admin-login-btn': 'लॉगिन करें',
        'admin-data-header': 'उपयोगकर्ता मेट्रिक्स डेटाबेस',
        'admin-auth-text': 'प्रमाणीकरण हो रहा है...',
        'admin-logout-btn': 'लॉगआउट',

        // Dynamic Content
        'bmr-unit': 'कैलोरी/दिन',
        'diet-table-meal': 'भोजन',
        'diet-table-veg': 'शाकाहारी विकल्प',
        'diet-table-nonveg': 'मांसाहारी विकल्प',
        'diet-table-focus': 'फोकस',
        'meal-breakfast': 'नाश्ता',
        'meal-lunch': 'दोपहर का भोजन',
        'meal-snack': 'स्नैक',
        'meal-dinner': 'रात का खाना',
        'meal-veg-b': 'बेरी और नट्स के साथ ओट्स (उच्च फाइबर)',
        'meal-nonveg-b': '4 एग व्हाइट + 2 पूरे अंडे, मल्टीग्रेन टोस्ट',
        'meal-veg-l': 'दाल का सूप/दाल, ब्राउन राइस, बड़ी हरी सलाद',
        'meal-nonveg-l': 'ग्रिल्ड चिकन/मछली, मिश्रित सब्जियों का बड़ा हिस्सा',
        'meal-veg-s': '10 बादाम के साथ सेब/केला',
        'meal-nonveg-s': 'एक मुट्ठी बादाम या एक व्हे प्रोटीन शेक',
        'meal-veg-d': 'पनीर भुर्जी के साथ साबुत गेहूं की रोटी',
        'meal-nonveg-d': 'ग्रिल्ड मछली या टर्की, भाप में पकाई हुई सब्जियां',
        'focus-protein-carb': 'उच्च प्रोटीन, जटिल कार्बोहाइड्रेट',
        'focus-balanced': 'संतुलित भोजन, आवश्यक पोषक तत्व',
        'focus-fats-energy': 'स्वस्थ वसा और त्वरित ऊर्जा',
        'focus-lean-carb': 'लीन प्रोटीन, हल्के कार्बोहाइड्रेट',
        'nutrient-goals-header': 'पोषक तत्व लक्ष्य:',
        'daily-cal-label': 'अनुमानित दैनिक कैलोरी:',
        'cal-goal-note': 'मामूली वज़न घटाने/रखरखाव के लिए',
        'target-protein-label': 'लक्षित प्रोटीन:',
        'protein-unit': 'ग्राम/दिन',
        'hydration-label': 'हाइड्रेशन:',
        'hydration-unit': 'लीटर पानी रोज़ाना।',
        'goal-normal': 'लक्ष्य:',
        'goal-muscle': 'मांसपेशी निर्माण',
        'cardio-label': 'कार्डियो',
        'cardio-duration': 'मिनट',
        'cardio-run': 'दौड़ना',
        'cardio-hiit': 'उच्च-तीव्रता अंतराल प्रशिक्षण (HIIT)',
        'strength-label': 'शक्ति',
        'strength-normal-desc': 'मांसपेशियों के विकास को अधिकतम करने के लिए मिश्रित आंदोलनों पर ध्यान केंद्रित करने वाली फुल-बॉडी रूटीन।',
        'ex-table-ex': 'व्यायाम',
        'ex-table-sets': 'सेट',
        'ex-table-reps': 'रेप्स/अवधि',
        'ex-table-focus': 'प्राथमिक फोकस',
        'ex-squats': 'स्क्वाट्स',
        'ex-reps': 'रेप्स',
        'ex-pushups': 'पुश-अप्स',
        'ex-maxreps': 'अधिकतम रेप्स',
        'ex-rows': 'डंबल रोइंग',
        'ex-reps-side': 'रेप्स/साइड',
        'ex-plank': 'प्लैंक',
        'ex-seconds': 'सेकंड',
        'ex-focus-legs': 'पैर, कोर',
        'ex-focus-chest': 'छाती, ट्राइसेप्स, कंधे',
        'ex-focus-back': 'पीठ, बाइसेप्स',
        'ex-focus-core': 'कोर स्थिरता',
        'goal-overweight': 'लक्ष्य:',
        'goal-weightloss': 'वज़न कम करना',
        'cardio-walk': 'तेज चलना',
        'cardio-cycle': 'साइक्लिंग',
        'cardio-elliptical': 'अण्डाकार ट्रेनर',
        'cardio-tip': 'बढ़ी हुई हृदय गति बनाए रखने पर ध्यान दें।',
        'strength-overweight-desc': 'केवल बॉडीवेट व्यायाम। आवश्यकतानुसार कुर्सी/दीवार का सहारा लें।',
        'ex-title': 'व्यायाम',
        'ex-wall-pushups': 'दीवार पुश-अप्स',
        'ex-chair-squats': 'चेयर स्क्वाट्स',
        'ex-sit-stand': 'बैठने से खड़े होना',
        'ex-knee-raises': 'घुटने उठाना',
        'ex-marching': 'जगह पर मार्च करना',
        'ex-tip-title': 'टिप',
        'ex-tip-text': 'हमेशा 10 मिनट वार्म-अप और कूल-डाउन करें। हाइड्रेशन महत्वपूर्ण है। इस चरण में निरंतरता तीव्रता से अधिक महत्वपूर्ण है।',
        'fitness-level': 'फिटनेस स्तर:',
        'level-beginner': 'शुरुआती/इंटरमीडिएट',
        'schedule-suggestion': 'साप्ताहिक कार्यक्रम सुझाव:',
        'day-mon': 'सोमवार',
        'day-tue': 'मंगलवार',
        'day-wed': 'बुधवार',
        'day-thu': 'गुरुवार',
        'day-fri': 'शुक्रवार',
        'day-sat': 'शनिवार',
        'day-sun': 'रविवार',
        'act-strength': 'फुल बॉडी स्ट्रेंथ',
        'act-cardio': 'कार्डियो',
        'act-rest': 'आराम/सक्रिय पुनर्प्राप्ति',
        'act-long-cardio': 'लंबा कार्डियो सत्र',
        'admin-col-name': 'नाम',
        'admin-col-age': 'आयु',
        'admin-col-gender': 'लिंग',
        'admin-col-height': 'ऊँचाई (सेमी)',
        'admin-col-weight': 'वज़न (किलो)',
        'admin-col-bmi': 'बीएमआई',
        'admin-col-bmr': 'बीएमआर (कैलोरी)',
        'admin-col-diet': 'आहार प्राथमिकता',
        'admin-col-timestamp': 'समय टिकट',
    },
    'es': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - Guía de Fitness Personalizada',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "Tu viaje personalizado hacia la salud y el bienestar. Haz clic en 'INPUT' para comenzar tu evaluación.",
        'landing-btn': 'Empezar',
        'lang-label': 'Idioma:',

        // Navigation
        'nav-home': 'INICIO',
        'nav-input': 'ENTRADA',
        'nav-diet': 'PLAN DE DIETA',
        'nav-exercise': 'PLAN DE EJERCICIOS',
        'nav-admin-info': 'INFO ADMIN',
        'nav-reviews': 'RESEÑAS',
        'nav-admin-login': 'ACCESO ADMIN',

        // Input Form
        'input-header': 'INGRESA TUS DETALLES',
        'label-name': 'NOMBRE',
        'label-height': 'ALTURA (CM)',
        'label-weight': 'PESO (KG)',
        'label-age': 'EDAD (AÑOS)',
        'label-gender': 'GÉNERO',
        'label-preference': 'PREFERENCIA DIETÉTICA',
        'gender-male': 'Masculino',
        'gender-female': 'Femenino',
        'gender-trans': 'Trans',
        'gender-other': 'No especificado (Homo/Otro)',
        'pref-veg': 'Vegetariano',
        'pref-nonveg': 'No Vegetariano',
        'pref-both': 'Ambos', // ADDED
        'pref-select': 'Seleccionar...',
        'input-submit-btn': 'GENERAR PLAN',
        'input-reset-btn': 'REINICIAR FORMULARIO',
        'input-alert-invalid': 'Por favor, rellena todos los campos con números válidos.',
        
        // Results/Plan Headers
        'bmi-header': 'RESULTADO IMC',
        'diet-plan-header': 'TU PLAN DE DIETA PERSONALIZADO',
        'exercise-plan-header': 'TU PLAN DE EJERCICIOS PERSONALIZADO',

        // BMI Statuses
        'status-underweight': 'Bajo Peso',
        'status-normal': 'Peso Normal',
        'status-overweight': 'Sobrepeso',
        'status-obese': 'Obeso',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': 'Nota: Los objetivos de calorías son estimaciones. Ajusta según tu nivel de actividad y consulta médica.',
        'diet-disclaimer': '*Consulta siempre a un nutricionista certificado antes de realizar cambios dietéticos importantes.',
        'exercise-disclaimer': '*Consulta siempre a un médico antes de comenzar cualquier nuevo régimen de ejercicios.',

        // Review Page
        'review-header': 'RESEÑAS Y COMENTARIOS DE USUARIOS',
        'label-reviewer-name': 'TU NOMBRE',
        'label-review-text': 'TU OPINIÓN',
        'review-submit-btn': 'ENVIAR RESEÑA',
        'review-list-header': 'Últimas Reseñas',
        'review-new-tag': '(Nueva Reseña)',
        'review-alert-success': '¡Gracias por tus comentarios! Tu reseña ha sido añadida localmente.',

        // Admin
        'admin-login-header': 'ACCESO ADMIN',
        'label-admin-id': 'ID DE USUARIO ADMIN',
        'label-admin-password': 'CONTRASEÑA',
        'admin-login-btn': 'ACCEDER',
        'admin-data-header': 'BASE DE DATOS DE MÉTRICAS DE USUARIO',
        'admin-auth-text': 'Autenticando...',
        'admin-logout-btn': 'Cerrar Sesión',

        // Dynamic Content
        'bmr-unit': 'Calorías/día',
        'diet-table-meal': 'Comida',
        'diet-table-veg': 'Opción Vegetariana',
        'diet-table-nonveg': 'Opción No Vegetariana',
        'diet-table-focus': 'Enfoque',
        'meal-breakfast': 'Desayuno',
        'meal-lunch': 'Almuerzo',
        'meal-snack': 'Merienda',
        'meal-dinner': 'Cena',
        'meal-veg-b': 'Avena con bayas y nueces (alto contenido de fibra)',
        'meal-nonveg-b': '4 Claras de Huevo + 2 Huevos Enteros, Tostada Multigrano',
        'meal-veg-l': 'Sopa de lentejas/Dal, Arroz Integral, ensalada verde grande',
        'meal-nonveg-l': 'Pollo/Pescado a la Parrilla, gran porción de vegetales mixtos',
        'meal-veg-s': 'Manzana/Plátano con 10 almendras',
        'meal-nonveg-s': 'Puñado de almendras o un batido de proteína de suero',
        'meal-veg-d': 'Paneer Bhurji con roti de trigo integral',
        'meal-nonveg-d': 'Pescado o Pavo a la Parrilla, verduras al vapor',
        'focus-protein-carb': 'Alto Contenido de Proteínas, Carbohidratos Complejos',
        'focus-balanced': 'Comida Equilibrada, Nutrientes Esenciales',
        'focus-fats-energy': 'Grasas Saludables y Energía Rápida',
        'focus-lean-carb': 'Proteína Magra, Carbohidratos Ligeros',
        'nutrient-goals-header': 'Objetivos Nutricionales:',
        'daily-cal-label': 'Calorías Diarias Estimadas:',
        'cal-goal-note': 'para pérdida de peso/mantenimiento moderado',
        'target-protein-label': 'Proteína Objetivo:',
        'protein-unit': 'gramos/día',
        'hydration-label': 'Hidratación:',
        'hydration-unit': 'Litros de agua diariamente.',
        'goal-normal': 'Objetivo:',
        'goal-muscle': 'Construcción Muscular',
        'cardio-label': 'Cardio',
        'cardio-duration': 'minutos',
        'cardio-run': 'Correr',
        'cardio-hiit': 'Entrenamiento por Intervalos de Alta Intensidad (HIIT)',
        'strength-label': 'Fuerza',
        'strength-normal-desc': 'Rutina completa del cuerpo enfocada en movimientos compuestos para maximizar el crecimiento muscular.',
        'ex-table-ex': 'Ejercicio',
        'ex-table-sets': 'Series',
        'ex-table-reps': 'Repeticiones/Duración',
        'ex-table-focus': 'Enfoque Principal',
        'ex-squats': 'Sentadillas',
        'ex-reps': 'repeticiones',
        'ex-pushups': 'Flexiones',
        'ex-maxreps': 'Máx. repeticiones',
        'ex-rows': 'Remo con Mancuernas',
        'ex-reps-side': 'repeticiones/lado',
        'ex-plank': 'Plancha',
        'ex-seconds': 'segundos',
        'ex-focus-legs': 'Piernas, Core',
        'ex-focus-chest': 'Pecho, Tríceps, Hombros',
        'ex-focus-back': 'Espalda, Bíceps',
        'ex-focus-core': 'Estabilidad del Core',
        'goal-overweight': 'Objetivo:',
        'goal-weightloss': 'Pérdida de Peso',
        'cardio-walk': 'Caminata Rápida',
        'cardio-cycle': 'Ciclismo',
        'cardio-elliptical': 'Elíptica',
        'cardio-tip': 'Concéntrate en mantener una frecuencia cardíaca elevada.',
        'strength-overweight-desc': 'Solo ejercicios de peso corporal. Usa apoyo de silla/pared si es necesario.',
        'ex-title': 'Ejercicios',
        'ex-wall-pushups': 'Flexiones de Pared',
        'ex-chair-squats': 'Sentadillas en Silla',
        'ex-sit-stand': 'sentarse y levantarse',
        'ex-knee-raises': 'Elevación de Rodillas',
        'ex-marching': 'marchar en el sitio',
        'ex-tip-title': 'Consejo',
        'ex-tip-text': 'Siempre calienta y enfría durante 10 minutos. La hidratación es clave. La consistencia es más importante que la intensidad en esta etapa.',
        'fitness-level': 'Nivel de Fitness:',
        'level-beginner': 'Principiante/Intermedio',
        'schedule-suggestion': 'Sugerencia de Horario Semanal:',
        'day-mon': 'Lunes',
        'day-tue': 'Martes',
        'day-wed': 'Miércoles',
        'day-thu': 'Jueves',
        'day-fri': 'Viernes',
        'day-sat': 'Sábado',
        'day-sun': 'Domingo',
        'act-strength': 'Fuerza Cuerpo Completo',
        'act-cardio': 'Cardio',
        'act-rest': 'Descanso/Recuperación Activa',
        'act-long-cardio': 'Sesión Larga de Cardio',
        'admin-col-name': 'Nombre',
        'admin-col-age': 'Edad',
        'admin-col-gender': 'Género',
        'admin-col-height': 'Altura (cm)',
        'admin-col-weight': 'Peso (kg)',
        'admin-col-bmi': 'IMC',
        'admin-col-bmr': 'TMB (cal)',
        'admin-col-diet': 'Pref. Dieta',
        'admin-col-timestamp': 'Marca de Tiempo',
    },
    'ja': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - パーソナライズド・フィットネスガイド',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "最高の健康とウェルネスへのパーソナライズされた旅。評価を開始するには「入力」をクリックしてください。",
        'landing-btn': '始める',
        'lang-label': '言語:',

        // Navigation
        'nav-home': 'ホーム',
        'nav-input': '入力',
        'nav-diet': 'ダイエットプラン',
        'nav-exercise': 'エクササイズプラン',
        'nav-admin-info': '管理者情報',
        'nav-reviews': 'レビュー',
        'nav-admin-login': '管理者ログイン',

        // Input Form
        'input-header': '詳細を入力してください',
        'label-name': '名前',
        'label-height': '身長 (CM)',
        'label-weight': '体重 (KG)',
        'label-age': '年齢 (歳)',
        'label-gender': '性別',
        'label-preference': '食事の好み',
        'gender-male': '男性',
        'gender-female': '女性',
        'gender-trans': 'トランス',
        'gender-other': '未指定 (ホモ/その他)',
        'pref-veg': '菜食主義',
        'pref-nonveg': '非菜食主義',
        'pref-both': '両方', // ADDED
        'pref-select': '選択...',
        'input-submit-btn': 'プランを生成',
        'input-reset-btn': 'フォームをリセット',
        'input-alert-invalid': 'すべてのフィールドに有効な数値を入力してください。',
        
        // Results/Plan Headers
        'bmi-header': 'BMI結果',
        'diet-plan-header': 'あなたのパーソナライズされたダイエットプラン',
        'exercise-plan-header': 'あなたのパーソナライズされたエクササイズプラン',

        // BMI Statuses
        'status-underweight': '低体重',
        'status-normal': '標準体重',
        'status-overweight': '過体重',
        'status-obese': '肥満',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': '注意: カロリー目標は推定値です。活動レベルと医師の相談に基づいて調整してください。',
        'diet-disclaimer': '*主要な食事変更を行う前に、必ず認定栄養士にご相談ください。',
        'exercise-disclaimer': '*新しいフィットネス体制を開始する前に、必ず医師にご相談ください。',

        // Review Page
        'review-header': 'ユーザーレビューとフィードバック',
        'label-reviewer-name': 'あなたの名前',
        'label-review-text': 'あなたのフィードバック',
        'review-submit-btn': 'レビューを送信',
        'review-list-header': '最新のレビュー',
        'review-new-tag': '(新しいレビュー)',
        'review-alert-success': 'フィードバックありがとうございます！レビューはローカルに追加されました。',

        // Admin
        'admin-login-header': '管理者ログイン',
        'label-admin-id': '管理者ユーザーID',
        'label-admin-password': 'パスワード',
        'admin-login-btn': 'ログイン',
        'admin-data-header': 'ユーザーメトリクスデータベース',
        'admin-auth-text': '認証中...',
        'admin-logout-btn': 'ログアウト',

        // Dynamic Content
        'bmr-unit': 'カロリー/日',
        'diet-table-meal': '食事',
        'diet-table-veg': '菜食オプション',
        'diet-table-nonveg': '非菜食オプション',
        'diet-table-focus': '焦点',
        'meal-breakfast': '朝食',
        'meal-lunch': '昼食',
        'meal-snack': '間食',
        'meal-dinner': '夕食',
        'meal-veg-b': 'ベリーとナッツ入りのオートミール（高繊維）',
        'meal-nonveg-b': '卵白4個 + 全卵2個、マルチグレイン トースト',
        'meal-veg-l': 'レンズ豆のスープ/ダル、玄米、大きなグリーンサラダ',
        'meal-nonveg-l': 'グリルチキン/魚、たっぷりのミックス野菜',
        'meal-veg-s': 'リンゴ/バナナとアーモンド10粒',
        'meal-nonveg-s': '一握りのアーモンドまたはホエイプロテインシェイク',
        'meal-veg-d': 'パニール・ブルジと全粒小麦のロティ',
        'meal-nonveg-d': 'グリルした魚または七面鳥、蒸し野菜',
        'focus-protein-carb': '高タンパク質、複合炭水化物',
        'focus-balanced': 'バランスの取れた食事、必須栄養素',
        'focus-fats-energy': '健康的な脂質と素早いエネルギー',
        'focus-lean-carb': '赤身のタンパク質、軽い炭水化物',
        'nutrient-goals-header': '栄養目標:',
        'daily-cal-label': '推定1日カロリー:',
        'cal-goal-note': '適度な減量/維持のため',
        'target-protein-label': '目標タンパク質:',
        'protein-unit': 'グラム/日',
        'hydration-label': '水分補給:',
        'hydration-unit': 'リットルの水毎日。',
        'goal-normal': '目標:',
        'goal-muscle': '筋肉増強',
        'cardio-label': '有酸素運動',
        'cardio-duration': '分',
        'cardio-run': 'ランニング',
        'cardio-hiit': '高強度インターバルトレーニング (HIIT)',
        'strength-label': '筋力',
        'strength-normal-desc': '筋肉の成長を最大化するための複合運動に焦点を当てた全身ルーチン。',
        'ex-table-ex': '運動',
        'ex-table-sets': 'セット',
        'ex-table-reps': '回数/時間',
        'ex-table-focus': '主な焦点',
        'ex-squats': 'スクワット',
        'ex-reps': '回',
        'ex-pushups': '腕立て伏せ',
        'ex-maxreps': '最大回数',
        'ex-rows': 'ダンベルロウ',
        'ex-reps-side': '回/側',
        'ex-plank': 'プランク',
        'ex-seconds': '秒',
        'ex-focus-legs': '脚、体幹',
        'ex-focus-chest': '胸、上腕三頭筋、肩',
        'ex-focus-back': '背中、上腕二頭筋',
        'ex-focus-core': '体幹の安定性',
        'goal-overweight': '目標:',
        'goal-weightloss': '減量',
        'cardio-walk': '早歩き',
        'cardio-cycle': 'サイクリング',
        'cardio-elliptical': 'エリプティカル',
        'cardio-tip': '心拍数を高く保つことに集中してください。',
        'strength-overweight-desc': '自重運動のみ。必要に応じて椅子や壁のサポートを使用してください。',
        'ex-title': '運動',
        'ex-wall-pushups': '壁腕立て伏せ',
        'ex-chair-squats': '椅子スクワット',
        'ex-sit-stand': '座るから立つ',
        'ex-knee-raises': 'ニーレイズ',
        'ex-marching': '足踏み',
        'ex-tip-title': 'ヒント',
        'ex-tip-text': '必ず10分間のウォームアップとクールダウンを行ってください。水分補給が鍵です。この段階では、強さよりも一貫性が重要です。',
        'fitness-level': 'フィットネスレベル:',
        'level-beginner': '初心者/中級者',
        'schedule-suggestion': '週間スケジュールの提案:',
        'day-mon': '月曜日',
        'day-tue': '火曜日',
        'day-wed': '水曜日',
        'day-thu': '木曜日',
        'day-fri': '金曜日',
        'day-sat': '土曜日',
        'day-sun': '日曜日',
        'act-strength': '全身筋力',
        'act-cardio': '有酸素運動',
        'act-rest': '休息/アクティブリカバリー',
        'act-long-cardio': '長時間の有酸素運動',
        'admin-col-name': '名前',
        'admin-col-age': '年齢',
        'admin-col-gender': '性別',
        'admin-col-height': '身長 (cm)',
        'admin-col-weight': '体重 (kg)',
        'admin-col-bmi': 'BMI',
        'admin-col-bmr': 'BMR (cal)',
        'admin-col-diet': '食事の好み',
        'admin-col-timestamp': 'タイムスタンプ',
    },
    'ko': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - 맞춤형 피트니스 가이드',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "최고의 건강과 웰빙을 향한 맞춤형 여정. 평가를 시작하려면 '입력'을 클릭하세요.",
        'landing-btn': '시작하기',
        'lang-label': '언어:',

        // Navigation
        'nav-home': '홈',
        'nav-input': '입력',
        'nav-diet': '식단 계획',
        'nav-exercise': '운동 계획',
        'nav-admin-info': '관리자 정보',
        'nav-reviews': '리뷰',
        'nav-admin-login': '관리자 로그인',

        // Input Form
        'input-header': '세부 정보 입력',
        'label-name': '이름',
        'label-height': '키 (CM)',
        'label-weight': '체중 (KG)',
        'label-age': '나이 (년)',
        'label-gender': '성별',
        'label-preference': '식단 선호',
        'gender-male': '남성',
        'gender-female': '여성',
        'gender-trans': '트랜스',
        'gender-other': '미지정 (호모/기타)',
        'pref-veg': '채식주의',
        'pref-nonveg': '비채식주의',
        'pref-both': '둘 다', // ADDED
        'pref-select': '선택...',
        'input-submit-btn': '계획 생성',
        'input-reset-btn': '양식 초기화',
        'input-alert-invalid': '모든 필드에 유효한 숫자를 입력하십시오.',
        
        // Results/Plan Headers
        'bmi-header': 'BMI 결과',
        'diet-plan-header': '맞춤형 식단 계획',
        'exercise-plan-header': '맞춤형 운동 계획',

        // BMI Statuses
        'status-underweight': '저체중',
        'status-normal': '정상 체중',
        'status-overweight': '과체중',
        'status-obese': '비만',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': '참고: 칼로리 목표는 추정치입니다. 활동 수준 및 의사 상담을 기반으로 조정하십시오.',
        'diet-disclaimer': '*중요한 식단 변경 전에 항상 공인 영양사와 상담하십시오.',
        'exercise-disclaimer': '*새로운 피트니스 요법을 시작하기 전에 항상 의사와 상담하십시오.',

        // Review Page
        'review-header': '사용자 리뷰 및 피드백',
        'label-reviewer-name': '이름',
        'label-review-text': '피드백',
        'review-submit-btn': '리뷰 제출',
        'review-list-header': '최신 리뷰',
        'review-new-tag': '(새 리뷰)',
        'review-alert-success': '피드백 감사합니다! 리뷰가 로컬에 추가되었습니다.',

        // Admin
        'admin-login-header': '관리자 로그인',
        'label-admin-id': '관리자 사용자 ID',
        'label-admin-password': '암호',
        'admin-login-btn': '로그인',
        'admin-data-header': '사용자 측정 항목 데이터베이스',
        'admin-auth-text': '인증 중...',
        'admin-logout-btn': '로그아웃',

        // Dynamic Content
        'bmr-unit': '칼로리/일',
        'diet-table-meal': '식사',
        'diet-table-veg': '채식 옵션',
        'diet-table-nonveg': '비채식 옵션',
        'diet-table-focus': '초점',
        'meal-breakfast': '아침 식사',
        'meal-lunch': '점심 식사',
        'meal-snack': '간식',
        'meal-dinner': '저녁 식사',
        'meal-veg-b': '베리와 견과류를 곁들인 오트밀 (고섬유질)',
        'meal-nonveg-b': '달걀 흰자 4개 + 전란 2개, 통곡물 토스트',
        'meal-veg-l': '렌즈콩 수프/달, 현미밥, 큰 녹색 샐러드',
        'meal-nonveg-l': '구운 닭고기/생선, 혼합 채소 다량',
        'meal-veg-s': '사과/바나나와 아몬드 10개',
        'meal-nonveg-s': '아몬드 한 줌 또는 유청 단백질 쉐이크',
        'meal-veg-d': '파니르 부르지와 통밀 로티',
        'meal-nonveg-d': '구운 생선 또는 칠면조, 찐 채소',
        'focus-protein-carb': '고단백질, 복합 탄수화물',
        'focus-balanced': '균형 잡힌 식사, 필수 영양소',
        'focus-fats-energy': '건강한 지방 및 빠른 에너지',
        'focus-lean-carb': '저지방 단백질, 가벼운 탄수화물',
        'nutrient-goals-header': '영양 목표:',
        'daily-cal-label': '예상 일일 칼로리:',
        'cal-goal-note': '적당한 체중 감량/유지용',
        'target-protein-label': '목표 단백질:',
        'protein-unit': '그램/일',
        'hydration-label': '수분 공급:',
        'hydration-unit': '일일 물 리터.',
        'goal-normal': '목표:',
        'goal-muscle': '근육 구축',
        'cardio-label': '유산소 운동',
        'cardio-duration': '분',
        'cardio-run': '달리기',
        'cardio-hiit': '고강도 인터벌 트레이닝 (HIIT)',
        'strength-label': '근력',
        'strength-normal-desc': '근육 성장을 극대화하기 위해 복합 운동에 초점을 맞춘 전신 루틴입니다.',
        'ex-table-ex': '운동',
        'ex-table-sets': '세트',
        'ex-table-reps': '반복 횟수/기간',
        'ex-table-focus': '주요 초점',
        'ex-squats': '스쿼트',
        'ex-reps': '반복',
        'ex-pushups': '팔굽혀펴기',
        'ex-maxreps': '최대 반복 횟수',
        'ex-rows': '덤벨 로우',
        'ex-reps-side': '반복/측면',
        'ex-plank': '플랭크',
        'ex-seconds': '초',
        'ex-focus-legs': '다리, 코어',
        'ex-focus-chest': '가슴, 삼두근, 어깨',
        'ex-focus-back': '등, 이두근',
        'ex-focus-core': '코어 안정성',
        'goal-overweight': '목표:',
        'goal-weightloss': '체중 감량',
        'cardio-walk': '빠르게 걷기',
        'cardio-cycle': '사이클링',
        'cardio-elliptical': '일립티컬',
        'cardio-tip': '심박수를 높게 유지하는 데 집중하십시오.',
        'strength-overweight-desc': '체중 운동만. 필요에 따라 의자/벽 지지대를 사용하십시오.',
        'ex-title': '운동',
        'ex-wall-pushups': '벽 팔굽혀펴기',
        'ex-chair-squats': '의자 스쿼트',
        'ex-sit-stand': '앉았다 일어나기',
        'ex-knee-raises': '무릎 올리기',
        'ex-marching': '제자리 걸음',
        'ex-tip-title': '팁',
        'ex-tip-text': '항상 10분 동안 워밍업과 쿨다운을 하십시오. 수분 공급이 핵심입니다. 이 단계에서는 강도보다 일관성이 더 중요합니다.',
        'fitness-level': '피트니스 레벨:',
        'level-beginner': '초급/중급',
        'schedule-suggestion': '주간 일정 제안:',
        'day-mon': '월요일',
        'day-tue': '화요일',
        'day-wed': '수요일',
        'day-thu': '목요일',
        'day-fri': '금요일',
        'day-sat': '토요일',
        'day-sun': '일요일',
        'act-strength': '전신 근력',
        'act-cardio': '유산소 운동',
        'act-rest': '휴식/활동적인 회복',
        'act-long-cardio': '긴 유산소 세션',
        'admin-col-name': '이름',
        'admin-col-age': '나이',
        'admin-col-gender': '성별',
        'admin-col-height': '키 (cm)',
        'admin-col-weight': '체중 (kg)',
        'admin-col-bmi': 'BMI',
        'admin-col-bmr': 'BMR (cal)',
        'admin-col-diet': '식단 선호',
        'admin-col-timestamp': '타임스탬프',
    },
    'zh': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - 个性化健身指导',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "您的个性化健康之旅。点击'输入'开始您的评估。",
        'landing-btn': '开始',
        'lang-label': '语言:',

        // Navigation
        'nav-home': '主页',
        'nav-input': '输入',
        'nav-diet': '饮食计划',
        'nav-exercise': '锻炼计划',
        'nav-admin-info': '管理员信息',
        'nav-reviews': '评论',
        'nav-admin-login': '管理员登录',

        // Input Form
        'input-header': '输入您的详细信息',
        'label-name': '姓名',
        'label-height': '身高 (CM)',
        'label-weight': '体重 (KG)',
        'label-age': '年龄 (岁)',
        'label-gender': '性别',
        'label-preference': '饮食偏好',
        'gender-male': '男性',
        'gender-female': '女性',
        'gender-trans': '跨性别',
        'gender-other': '未指定 (同性/其他)',
        'pref-veg': '素食',
        'pref-nonveg': '非素食',
        'pref-both': '两种', // ADDED
        'pref-select': '选择...',
        'input-submit-btn': '生成计划',
        'input-reset-btn': '重置表格',
        'input-alert-invalid': '请填写所有字段并确保输入有效数字。',
        
        // Results/Plan Headers
        'bmi-header': 'BMI结果',
        'diet-plan-header': '您的个性化饮食计划',
        'exercise-plan-header': '您的个性化锻炼计划',

        // BMI Statuses
        'status-underweight': '体重过轻',
        'status-normal': '正常体重',
        'status-overweight': '超重',
        'status-obese': '肥胖',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': '注意: 卡路里目标是估计值。请根据您的活动水平和医生的建议进行调整。',
        'diet-disclaimer': '*在进行重大饮食改变之前，请务必咨询经过认证的营养师。',
        'exercise-disclaimer': '*在开始任何新的健身方案之前，请务必咨询医生。',

        // Review Page
        'review-header': '用户评论与反馈',
        'label-reviewer-name': '您的姓名',
        'label-review-text': '您的反馈',
        'review-submit-btn': '提交评论',
        'review-list-header': '最新评论',
        'review-new-tag': '(新评论)',
        'review-alert-success': '感谢您的反馈！您的评论已在本地添加。',

        // Admin
        'admin-login-header': '管理员登录',
        'label-admin-id': '管理员用户ID',
        'label-admin-password': '密码',
        'admin-login-btn': '登录',
        'admin-data-header': '用户指标数据库',
        'admin-auth-text': '验证中...',
        'admin-logout-btn': '退出登录',
        
        // Dynamic Content
        'bmr-unit': '卡路里/天',
        'diet-table-meal': '膳食',
        'diet-table-veg': '素食选项',
        'diet-table-nonveg': '非素食选项',
        'diet-table-focus': '重点',
        'meal-breakfast': '早餐',
        'meal-lunch': '午餐',
        'meal-snack': '零食',
        'meal-dinner': '晚餐',
        'meal-veg-b': '燕麦片配浆果和坚果（高纤维）',
        'meal-nonveg-b': '4个蛋白 + 2个全蛋，多谷物吐司',
        'meal-veg-l': '扁豆汤/ दाल，糙米饭，大份绿色沙拉',
        'meal-nonveg-l': '烤鸡/鱼，大份混合蔬菜',
        'meal-veg-s': '苹果/香蕉配10颗杏仁',
        'meal-nonveg-s': '一把杏仁或乳清蛋白奶昔',
        'meal-veg-d': '印度奶酪炒碎 (Paneer Bhurji) 配全麦烤饼',
        'meal-nonveg-d': '烤鱼或火鸡，蒸蔬菜',
        'focus-protein-carb': '高蛋白，复杂碳水化合物',
        'focus-balanced': '均衡膳食，必需营养素',
        'focus-fats-energy': '健康脂肪和快速能量',
        'focus-lean-carb': '精益蛋白质，轻碳水化合物',
        'nutrient-goals-header': '营养目标:',
        'daily-cal-label': '估计每日卡路里:',
        'cal-goal-note': '适用于适度的体重减轻/维持',
        'target-protein-label': '目标蛋白质:',
        'protein-unit': '克/天',
        'hydration-label': '水合作用:',
        'hydration-unit': '升水每日。',
        'goal-normal': '目标:',
        'goal-muscle': '肌肉建设',
        'cardio-label': '有氧运动',
        'cardio-duration': '分钟',
        'cardio-run': '跑步',
        'cardio-hiit': '高强度间歇训练 (HIIT)',
        'strength-label': '力量',
        'strength-normal-desc': '专注于复合运动的全身例行程序，以最大限度地促进肌肉生长。',
        'ex-table-ex': '运动',
        'ex-table-sets': '组',
        'ex-table-reps': '重复次数/持续时间',
        'ex-table-focus': '主要焦点',
        'ex-squats': '深蹲',
        'ex-reps': '次',
        'ex-pushups': '俯卧撑',
        'ex-maxreps': '最大重复次数',
        'ex-rows': '哑铃划船',
        'ex-reps-side': '次/侧',
        'ex-plank': '平板支撑',
        'ex-seconds': '秒',
        'ex-focus-legs': '腿部，核心',
        'ex-focus-chest': '胸部，三头肌，肩部',
        'ex-focus-back': '背部，二头肌',
        'ex-focus-core': '核心稳定性',
        'goal-overweight': '目标:',
        'goal-weightloss': '体重减轻',
        'cardio-walk': '快走',
        'cardio-cycle': '骑自行车',
        'cardio-elliptical': '椭圆机',
        'cardio-tip': '专注于保持较高的心率。',
        'strength-overweight-desc': '仅限自重练习。需要时使用椅子/墙壁支撑。',
        'ex-title': '练习',
        'ex-wall-pushups': '靠墙俯卧撑',
        'ex-chair-squats': '椅子深蹲',
        'ex-sit-stand': '坐立',
        'ex-knee-raises': '抬膝',
        'ex-marching': '原地踏步',
        'ex-tip-title': '提示',
        'ex-tip-text': '务必进行10分钟的热身和放松。水合作用是关键。在此阶段，一致性比强度更重要。',
        'fitness-level': '健身水平:',
        'level-beginner': '初级/中级',
        'schedule-suggestion': '每周日程建议:',
        'day-mon': '周一',
        'day-tue': '周二',
        'day-wed': '周三',
        'day-thu': '周四',
        'day-fri': '周五',
        'day-sat': '周六',
        'day-sun': '周日',
        'act-strength': '全身力量',
        'act-cardio': '有氧运动',
        'act-rest': '休息/主动恢复',
        'act-long-cardio': '长时间有氧运动',
        'admin-col-name': '姓名',
        'admin-col-age': '年龄',
        'admin-col-gender': '性别',
        'admin-col-height': '身高 (cm)',
        'admin-col-weight': '体重 (kg)',
        'admin-col-bmi': 'BMI',
        'admin-col-bmr': 'BMR (cal)',
        'admin-col-diet': '饮食偏好',
        'admin-col-timestamp': '时间戳',
    },
    'id': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - Panduan Kebugaran Pribadi',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "Perjalanan pribadi Anda menuju kesehatan dan kebugaran puncak. Klik 'INPUT' untuk memulai penilaian Anda.",
        'landing-btn': 'Mulai',
        'lang-label': 'Bahasa:',

        // Navigation
        'nav-home': 'BERANDA',
        'nav-input': 'MASUKAN',
        'nav-diet': 'RENCANA DIET',
        'nav-exercise': 'RENCANA LATIHAN',
        'nav-admin-info': 'INFO ADMIN',
        'nav-reviews': 'ULASAN',
        'nav-admin-login': 'LOGIN ADMIN',

        // Input Form
        'input-header': 'MASUKKAN DETAIL ANDA',
        'label-name': 'NAMA',
        'label-height': 'TINGGI (CM)',
        'label-weight': 'BERAT (KG)',
        'label-age': 'USIA (TAHUN)',
        'label-gender': 'GENDER',
        'label-preference': 'PREFERENSI DIET',
        'gender-male': 'Laki-laki',
        'gender-female': 'Perempuan',
        'gender-trans': 'Trans',
        'gender-other': 'Tidak Ditentukan (Homo/Lainnya)',
        'pref-veg': 'Vegetarian',
        'pref-nonveg': 'Non-Vegetarian',
        'pref-both': 'Keduanya', // ADDED
        'pref-select': 'Pilih...',
        'input-submit-btn': 'HASILKAN RENCANA',
        'input-reset-btn': 'RESET FORMULIR',
        'input-alert-invalid': 'Harap isi semua kolom dengan angka yang valid.',
        
        // Results/Plan Headers
        'bmi-header': 'HASIL BMI',
        'diet-plan-header': 'RENCANA DIET PRIBADI ANDA',
        'exercise-plan-header': 'RENCANA LATIHAN PRIBADI ANDA',

        // BMI Statuses
        'status-underweight': 'Kekurangan Berat Badan',
        'status-normal': 'Berat Badan Normal',
        'status-overweight': 'Kelebihan Berat Badan',
        'status-obese': 'Obesitas',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': 'Catatan: Target kalori adalah perkiraan. Sesuaikan berdasarkan tingkat aktivitas dan konsultasi dokter Anda.',
        'diet-disclaimer': '*Selalu konsultasikan dengan ahli gizi bersertifikat sebelum membuat perubahan diet besar.',
        'exercise-disclaimer': '*Selalu konsultasikan dengan dokter sebelum memulai rejimen kebugaran baru.',

        // Review Page
        'review-header': 'ULASAN & FEEDBACK PENGGUNA',
        'label-reviewer-name': 'NAMA ANDA',
        'label-review-text': 'FEEDBACK ANDA',
        'review-submit-btn': 'KIRIM ULASAN',
        'review-list-header': 'Ulasan Terbaru',
        'review-new-tag': '(Ulasan Baru)',
        'review-alert-success': 'Terima kasih atas umpan balik Anda! Ulasan Anda telah ditambahkan secara lokal.',

        // Admin
        'admin-login-header': 'LOGIN ADMIN',
        'label-admin-id': 'ID PENGGUNA ADMIN',
        'label-admin-password': 'KATA SANDI',
        'admin-login-btn': 'LOGIN',
        'admin-data-header': 'DATABASE METRIK PENGGUNA',
        'admin-auth-text': 'Otentikasi...',
        'admin-logout-btn': 'Keluar',
        
        // Dynamic Content
        'bmr-unit': 'Kalori/hari',
        'diet-table-meal': 'Makanan',
        'diet-table-veg': 'Opsi Vegetarian',
        'diet-table-nonveg': 'Opsi Non-Vegetarian',
        'diet-table-focus': 'Fokus',
        'meal-breakfast': 'Sarapan',
        'meal-lunch': 'Makan Siang',
        'meal-snack': 'Camilan',
        'meal-dinner': 'Makan Malam',
        'meal-veg-b': 'Oat dengan beri dan kacang (tinggi serat)',
        'meal-nonveg-b': '4 Putih Telur + 2 Telur Utuh, Roti Panggang Multigrain',
        'meal-veg-l': 'Sup Miju-miju/Dal, Nasi Merah, salad hijau besar',
        'meal-nonveg-l': 'Ayam/Ikan Panggang, porsi besar sayuran campur',
        'meal-veg-s': 'Apel/Pisang dengan 10 almond',
        'meal-nonveg-s': 'Segenggam almond atau protein shake whey',
        'meal-veg-d': 'Paneer Bhurji dengan roti gandum utuh',
        'meal-nonveg-d': 'Ikan atau Kalkun Panggang, sayuran kukus',
        'focus-protein-carb': 'Protein Tinggi, Karbohidrat Kompleks',
        'focus-balanced': 'Makanan Seimbang, Nutrisi Penting',
        'focus-fats-energy': 'Lemak Sehat & Energi Cepat',
        'focus-lean-carb': 'Protein Rendah Lemak, Karbohidrat Ringan',
        'nutrient-goals-header': 'Sasaran Nutrisi:',
        'daily-cal-label': 'Perkiraan Kalori Harian:',
        'cal-goal-note': 'untuk penurunan berat badan/pemeliharaan sederhana',
        'target-protein-label': 'Target Protein:',
        'protein-unit': 'gram/hari',
        'hydration-label': 'Hidrasi:',
        'hydration-unit': 'Liter air setiap hari.',
        'goal-normal': 'Tujuan:',
        'goal-muscle': 'Pembentukan Otot',
        'cardio-label': 'Kardio',
        'cardio-duration': 'menit',
        'cardio-run': 'Berlari',
        'cardio-hiit': 'Latihan Interval Intensitas Tinggi (HIIT)',
        'strength-label': 'Kekuatan',
        'strength-normal-desc': 'Rutin seluruh tubuh berfokus pada gerakan majemuk untuk memaksimalkan pertumbuhan otot.',
        'ex-table-ex': 'Latihan',
        'ex-table-sets': 'Set',
        'ex-table-reps': 'Repetisi/Durasi',
        'ex-table-focus': 'Fokus Utama',
        'ex-squats': 'Squat',
        'ex-reps': 'repetisi',
        'ex-pushups': 'Push-up',
        'ex-maxreps': 'Maksimal repetisi',
        'ex-rows': 'Row Dumbbell',
        'ex-reps-side': 'repetisi/sisi',
        'ex-plank': 'Plank',
        'ex-seconds': 'detik',
        'ex-focus-legs': 'Kaki, Inti',
        'ex-focus-chest': 'Dada, Trisep, Bahu',
        'ex-focus-back': 'Punggung, Bisep',
        'ex-focus-core': 'Stabilitas Inti',
        'goal-overweight': 'Tujuan:',
        'goal-weightloss': 'Penurunan Berat Badan',
        'cardio-walk': 'Jalan Cepat',
        'cardio-cycle': 'Bersepeda',
        'cardio-elliptical': 'Eliptik',
        'cardio-tip': 'Fokus pada menjaga detak jantung yang tinggi.',
        'strength-overweight-desc': 'Hanya latihan berat badan. Gunakan sandaran kursi/dinding jika diperlukan.',
        'ex-title': 'Latihan',
        'ex-wall-pushups': 'Push-up Dinding',
        'ex-chair-squats': 'Squat Kursi',
        'ex-sit-stand': 'duduk ke berdiri',
        'ex-knee-raises': 'Angkat Lutut',
        'ex-marching': 'berbaris di tempat',
        'ex-tip-title': 'Tips',
        'ex-tip-text': 'Selalu lakukan pemanasan dan pendinginan selama 10 menit. Hidrasi adalah kunci. Konsistensi lebih penting daripada intensitas pada tahap ini.',
        'fitness-level': 'Tingkat Kebugaran:',
        'level-beginner': 'Pemula/Menengah',
        'schedule-suggestion': 'Saran Jadwal Mingguan:',
        'day-mon': 'Senin',
        'day-tue': 'Selasa',
        'day-wed': 'Rabu',
        'day-thu': 'Kamis',
        'day-fri': 'Jumat',
        'day-sat': 'Sabtu',
        'day-sun': 'Minggu',
        'act-strength': 'Kekuatan Seluruh Tubuh',
        'act-cardio': 'Kardio',
        'act-rest': 'Istirahat/Pemulihan Aktif',
        'act-long-cardio': 'Sesi Kardio Panjang',
        'admin-col-name': 'Nama',
        'admin-col-age': 'Usia',
        'admin-col-gender': 'Gender',
        'admin-col-height': 'Tinggi (cm)',
        'admin-col-weight': 'Berat (kg)',
        'admin-col-bmi': 'BMI',
        'admin-col-bmr': 'BMR (kal)',
        'admin-col-diet': 'Pref. Diet',
        'admin-col-timestamp': 'Cap Waktu',
    },
    'th': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - คำแนะนำการออกกำลังกายส่วนบุคคล',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "เส้นทางส่วนตัวของคุณสู่สุขภาพและความสมบูรณ์สูงสุด คลิก 'INPUT' เพื่อเริ่มต้นการประเมินของคุณ",
        'landing-btn': 'เริ่มต้น',
        'lang-label': 'ภาษา:',

        // Navigation
        'nav-home': 'หน้าหลัก',
        'nav-input': 'ข้อมูลเข้า',
        'nav-diet': 'แผนอาหาร',
        'nav-exercise': 'แผนการออกกำลังกาย',
        'nav-admin-info': 'ข้อมูลผู้ดูแล',
        'nav-reviews': 'รีวิว',
        'nav-admin-login': 'เข้าสู่ระบบผู้ดูแล',

        // Input Form
        'input-header': 'ป้อนรายละเอียดของคุณ',
        'label-name': 'ชื่อ',
        'label-height': 'ส่วนสูง (ซม.)',
        'label-weight': 'น้ำหนัก (กก.)',
        'label-age': 'อายุ (ปี)',
        'label-gender': 'เพศ',
        'label-preference': 'ความชอบด้านอาหาร',
        'gender-male': 'ชาย',
        'gender-female': 'หญิง',
        'gender-trans': 'ทรานส์',
        'gender-other': 'ไม่ได้ระบุ (โฮโม/อื่นๆ)',
        'pref-veg': 'มังสวิรัติ',
        'pref-nonveg': 'ไม่ใช่มังสวิรัติ',
        'pref-both': 'ทั้งสอง', // ADDED
        'pref-select': 'เลือก...',
        'input-submit-btn': 'สร้างแผน',
        'input-reset-btn': 'รีเซ็ตแบบฟอร์ม',
        'input-alert-invalid': 'กรุณากรอกข้อมูลให้ครบถ้วนด้วยตัวเลขที่ถูกต้อง',
        
        // Results/Plan Headers
        'bmi-header': 'ผลลัพธ์ BMI',
        'diet-plan-header': 'แผนอาหารส่วนบุคคลของคุณ',
        'exercise-plan-header': 'แผนการออกกำลังกายส่วนบุคคลของคุณ',

        // BMI Statuses
        'status-underweight': 'น้ำหนักต่ำกว่าเกณฑ์',
        'status-normal': 'น้ำหนักปกติ',
        'status-overweight': 'น้ำหนักเกิน',
        'status-obese': 'เป็นโรคอ้วน',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': 'หมายเหตุ: เป้าหมายแคลอรี่เป็นการประมาณการณ์ ปรับเปลี่ยนตามระดับกิจกรรมและการปรึกษาแพทย์ของคุณ',
        'diet-disclaimer': '*ควรปรึกษานักโภชนาการที่ผ่านการรับรองเสมอก่อนทำการเปลี่ยนแปลงอาหารที่สำคัญ',
        'exercise-disclaimer': '*ควรปรึกษาแพทย์เสมอก่อนเริ่มต้นการออกกำลังกายใหม่',

        // Review Page
        'review-header': 'รีวิวและข้อเสนอแนะจากผู้ใช้',
        'label-reviewer-name': 'ชื่อของคุณ',
        'label-review-text': 'ข้อเสนอแนะของคุณ',
        'review-submit-btn': 'ส่งรีวิว',
        'review-list-header': 'รีวิวล่าสุด',
        'review-new-tag': '(รีวิวใหม่)',
        'review-alert-success': 'ขอบคุณสำหรับข้อเสนอแนะของคุณ! รีวิวของคุณถูกเพิ่มในเครื่องแล้ว',

        // Admin
        'admin-login-header': 'เข้าสู่ระบบผู้ดูแล',
        'label-admin-id': 'รหัสผู้ใช้ผู้ดูแล',
        'label-admin-password': 'รหัสผ่าน',
        'admin-login-btn': 'เข้าสู่ระบบ',
        'admin-data-header': 'ฐานข้อมูลเมตริกผู้ใช้',
        'admin-auth-text': 'กำลังตรวจสอบ...',
        'admin-logout-btn': 'ออกจากระบบ',
        
        // Dynamic Content
        'bmr-unit': 'แคลอรี่/วัน',
        'diet-table-meal': 'มื้ออาหาร',
        'diet-table-veg': 'ตัวเลือกมังสวิรัติ',
        'diet-table-nonveg': 'ตัวเลือกไม่ใช่มังสวิรัติ',
        'diet-table-focus': 'เน้น',
        'meal-breakfast': 'อาหารเช้า',
        'meal-lunch': 'อาหารกลางวัน',
        'meal-snack': 'ของว่าง',
        'meal-dinner': 'อาหารเย็น',
        'meal-veg-b': 'ข้าวโอ๊ตกับผลเบอร์รีและถั่ว (ใยอาหารสูง)',
        'meal-nonveg-b': 'ไข่ขาว 4 ฟอง + ไข่เต็ม 2 ฟอง, ขนมปังธัญพืชรวม',
        'meal-veg-l': 'ซุปถั่วเลนทิล/ดาล, ข้าวกล้อง, สลัดผักใบเขียวขนาดใหญ่',
        'meal-nonveg-l': 'ไก่/ปลา ย่าง, ผักรวมปริมาณมาก',
        'meal-veg-s': 'แอปเปิ้ล/กล้วยกับอัลมอนด์ 10 เม็ด',
        'meal-nonveg-s': 'อัลมอนด์หนึ่งกำมือหรือเวย์โปรตีนเชค',
        'meal-veg-d': 'พะแนงบฮูร์จิกับโรตีโฮลวีท',
        'meal-nonveg-d': 'ปลาหรือไก่งวงย่าง, ผักนึ่ง',
        'focus-protein-carb': 'โปรตีนสูง, คาร์โบไฮเดรตเชิงซ้อน',
        'focus-balanced': 'อาหารสมดุล, สารอาหารจำเป็น',
        'focus-fats-energy': 'ไขมันดีและพลังงานรวดเร็ว',
        'focus-lean-carb': 'โปรตีนไม่ติดมัน, คาร์โบไฮเดรตเบา',
        'nutrient-goals-header': 'เป้าหมายทางโภชนาการ:',
        'daily-cal-label': 'แคลอรี่ต่อวันโดยประมาณ:',
        'cal-goal-note': 'สำหรับการลด/รักษาน้ำหนักพอประมาณ',
        'target-protein-label': 'เป้าหมายโปรตีน:',
        'protein-unit': 'กรัม/วัน',
        'hydration-label': 'ความชุ่มชื้น:',
        'hydration-unit': 'ลิตรของน้ำต่อวัน',
        'goal-normal': 'เป้าหมาย:',
        'goal-muscle': 'การสร้างกล้ามเนื้อ',
        'cardio-label': 'คาร์ดิโอ',
        'cardio-duration': 'นาที',
        'cardio-run': 'วิ่ง',
        'cardio-hiit': 'การฝึกแบบเป็นช่วงที่มีความเข้มข้นสูง (HIIT)',
        'strength-label': 'ความแข็งแรง',
        'strength-normal-desc': 'กิจวัตรแบบเต็มตัวที่เน้นการเคลื่อนไหวแบบผสมเพื่อเพิ่มการเจริญเติบโตของกล้ามเนื้อให้สูงสุด',
        'ex-table-ex': 'การออกกำลังกาย',
        'ex-table-sets': 'เซ็ต',
        'ex-table-reps': 'จำนวนครั้ง/ระยะเวลา',
        'ex-table-focus': 'จุดเน้นหลัก',
        'ex-squats': 'สควอท',
        'ex-reps': 'ครั้ง',
        'ex-pushups': 'วิดพื้น',
        'ex-maxreps': 'จำนวนครั้งสูงสุด',
        'ex-rows': 'ดัมเบลโลว์',
        'ex-reps-side': 'ครั้ง/ข้าง',
        'ex-plank': 'แพลงก์',
        'ex-seconds': 'วินาที',
        'ex-focus-legs': 'ขา, แกนกลางลำตัว',
        'ex-focus-chest': 'หน้าอก, ต้นแขนด้านหลัง, ไหล่',
        'ex-focus-back': 'หลัง, ต้นแขนด้านหน้า',
        'ex-focus-core': 'ความมั่นคงของแกนกลางลำตัว',
        'goal-overweight': 'เป้าหมาย:',
        'goal-weightloss': 'การลดน้ำหนัก',
        'cardio-walk': 'การเดินเร็ว',
        'cardio-cycle': 'การปั่นจักรยาน',
        'cardio-elliptical': 'เครื่องเดินวงรี',
        'cardio-tip': 'เน้นการรักษาอัตราการเต้นของหัวใจให้สูงขึ้น',
        'strength-overweight-desc': 'การออกกำลังกายด้วยน้ำหนักตัวเท่านั้น ใช้เก้าอี้/กำแพงช่วยหากจำเป็น',
        'ex-title': 'การออกกำลังกาย',
        'ex-wall-pushups': 'วิดพื้นกำแพง',
        'ex-chair-squats': 'สควอทเก้าอี้',
        'ex-sit-stand': 'นั่งลงแล้วยืนขึ้น',
        'ex-knee-raises': 'ยกเข่า',
        'ex-marching': 'เดินอยู่กับที่',
        'ex-tip-title': 'เคล็ดลับ',
        'ex-tip-text': 'วอร์มอัพและคูลดาวน์เสมอเป็นเวลา 10 นาที การดื่มน้ำเป็นสิ่งสำคัญ ความสม่ำเสมอสำคัญกว่าความเข้มข้นในขั้นตอนนี้',
        'fitness-level': 'ระดับความฟิต:',
        'level-beginner': 'ระดับเริ่มต้น/ปานกลาง',
        'schedule-suggestion': 'ข้อเสนอแนะตารางเวลาประจำสัปดาห์:',
        'day-mon': 'วันจันทร์',
        'day-tue': 'วันอังคาร',
        'day-wed': 'วันพุธ',
        'day-thu': 'วันพฤหัสบดี',
        'day-fri': 'วันศุกร์',
        'day-sat': 'วันเสาร์',
        'day-sun': 'วันอาทิตย์',
        'act-strength': 'ความแข็งแรงเต็มตัว',
        'act-cardio': 'คาร์ดิโอ',
        'act-rest': 'พัก/การฟื้นตัวแบบแอคทีฟ',
        'act-long-cardio': 'เซสชั่นคาร์ดิโอระยะยาว',
        'admin-col-name': 'ชื่อ',
        'admin-col-age': 'อายุ',
        'admin-col-gender': 'เพศ',
        'admin-col-height': 'ส่วนสูง (ซม.)',
        'admin-col-weight': 'น้ำหนัก (กก.)',
        'admin-col-bmi': 'BMI',
        'admin-col-bmr': 'BMR (แคล)',
        'admin-col-diet': 'ความชอบด้านอาหาร',
        'admin-col-timestamp': 'การประทับเวลา',
    },
    'fr': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - Guide de Fitness Personnalisé',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "Votre voyage personnalisé vers la santé et le bien-être optimaux. Cliquez sur 'INPUT' pour commencer votre évaluation.",
        'landing-btn': 'Commencer',
        'lang-label': 'Langue:',

        // Navigation
        'nav-home': 'ACCUEIL',
        'nav-input': 'ENTRÉE',
        'nav-diet': 'PLAN DE RÉGIME',
        'nav-exercise': 'PLAN D\'EXERCICE',
        'nav-admin-info': 'INFO ADMIN',
        'nav-reviews': 'AVIS',
        'nav-admin-login': 'CONNEXION ADMIN',

        // Input Form
        'input-header': 'ENTREZ VOS DÉTAILS',
        'label-name': 'NOM',
        'label-height': 'TAILLE (CM)',
        'label-weight': 'POIDS (KG)',
        'label-age': 'ÂGE (ANNÉES)',
        'label-gender': 'GENRE',
        'label-preference': 'PRÉFÉRENCE ALIMENTAIRE',
        'gender-male': 'Homme',
        'gender-female': 'Femme',
        'gender-trans': 'Trans',
        'gender-other': 'Non spécifié (Homo/Autre)',
        'pref-veg': 'Végétarien',
        'pref-nonveg': 'Non-Végétarien',
        'pref-both': 'Les Deux', // ADDED
        'pref-select': 'Sélectionner...',
        'input-submit-btn': 'GÉNÉRER UN PLAN',
        'input-reset-btn': 'RÉINITIALISER LE FORMULAIRE',
        'input-alert-invalid': 'Veuillez remplir tous les champs avec des chiffres valides.',
        
        // Results/Plan Headers
        'bmi-header': 'RÉSULTAT IMC',
        'diet-plan-header': 'VOTRE PLAN DE RÉGIME PERSONNALISÉ',
        'exercise-plan-header': 'VOTRE PLAN D\'EXERCICE PERSONNALISÉ',

        // BMI Statuses
        'status-underweight': 'Poids Insuffisant',
        'status-normal': 'Poids Normal',
        'status-overweight': 'Surpoids',
        'status-obese': 'Obèse',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': 'Remarque : Les objectifs caloriques sont des estimations. Ajustez-les en fonction de votre niveau d\'activité et de la consultation médicale.',
        'diet-disclaimer': '*Consultez toujours un nutritionniste certifié avant d\'apporter des changements alimentaires majeurs.',
        'exercise-disclaimer': '*Consultez toujours un médecin avant de commencer tout nouveau régime de fitness.',

        // Review Page
        'review-header': 'AVIS ET COMMENTAIRES DES UTILISATEURS',
        'label-reviewer-name': 'VOTRE NOM',
        'label-review-text': 'VOTRE COMMENTAIRE',
        'review-submit-btn': 'SOUMETTRE L\'AVIS',
        'review-list-header': 'Derniers Avis',
        'review-new-tag': '(Nouvel Avis)',
        'review-alert-success': 'Merci pour votre commentaire! Votre avis a été ajouté localement.',

        // Admin
        'admin-login-header': 'CONNEXION ADMIN',
        'label-admin-id': 'ID UTILISATEUR ADMIN',
        'label-admin-password': 'MOT DE PASSE',
        'admin-login-btn': 'SE CONNECTER',
        'admin-data-header': 'BASE DE DONNÉES DES MÉTRIQUES UTILISATEUR',
        'admin-auth-text': 'Authentification...',
        'admin-logout-btn': 'Déconnexion',

        // Dynamic Content (Required for JS functionality)
        'bmr-unit': 'Calories/jour',
        'diet-table-meal': 'Repas',
        'diet-table-veg': 'Option Végétarienne',
        'diet-table-nonveg': 'Option Non-Végétarienne',
        'diet-table-focus': 'Objectif',
        'meal-breakfast': 'Petit-déjeuner',
        'meal-lunch': 'Déjeuner',
        'meal-snack': 'Collation',
        'meal-dinner': 'Dîner',
        'meal-veg-b': 'Flocons d\'avoine avec baies et noix (riches en fibres)',
        'meal-nonveg-b': '4 blancs d\'œufs + 2 œufs entiers, toast multigrain',
        'meal-veg-l': 'Soupe de lentilles/Dal, riz brun, grande salade verte',
        'meal-nonveg-l': 'Poulet/Poisson grillé, grande portion de légumes variés',
        'meal-veg-s': 'Pomme/Banane avec 10 amandes',
        'meal-nonveg-s': 'Poignée d\'amandes ou un shake de protéines de lactosérum',
        'meal-veg-d': 'Paneer Bhurji avec roti de blé entier',
        'meal-nonveg-d': 'Poisson ou Dinde grillé, légumes vapeur',
        'focus-protein-carb': 'Protéines Élevées, Glucides Complexes',
        'focus-balanced': 'Repas Équilibré, Nutriments Essentiels',
        'focus-fats-energy': 'Graisses Saines et Énergie Rapide',
        'focus-lean-carb': 'Protéines Maigres, Glucides Légers',
        'nutrient-goals-header': 'Objectifs Nutritionnels:',
        'daily-cal-label': 'Calories Quotidiennes Estimées:',
        'cal-goal-note': 'pour une perte de poids/maintenance modeste',
        'target-protein-label': 'Objectif Protéines:',
        'protein-unit': 'grammes/jour',
        'hydration-label': 'Hydratation:',
        'hydration-unit': 'Litres d\'eau par jour.',
        'goal-normal': 'Objectif:',
        'goal-muscle': 'Construction Musculaire',
        'cardio-label': 'Cardio',
        'cardio-duration': 'minutes',
        'cardio-run': 'Course à pied',
        'cardio-hiit': 'Entraînement par Intervalles de Haute Intensité (HIIT)',
        'strength-label': 'Force',
        'strength-normal-desc': 'Routine complète du corps axée sur les mouvements composés pour maximiser la croissance musculaire.',
        'ex-table-ex': 'Exercice',
        'ex-table-sets': 'Séries',
        'ex-table-reps': 'Répétitions/Durée',
        'ex-table-focus': 'Objectif Principal',
        'ex-squats': 'Squats',
        'ex-reps': 'répétitions',
        'ex-pushups': 'Pompes',
        'ex-maxreps': 'Max de répétitions',
        'ex-rows': 'Tirages d\'haltères',
        'ex-reps-side': 'répétitions/côté',
        'ex-plank': 'Planche',
        'ex-seconds': 'secondes',
        'ex-focus-legs': 'Jambes, Core',
        'ex-focus-chest': 'Poitrine, Triceps, Épaules',
        'ex-focus-back': 'Dos, Biceps',
        'ex-focus-core': 'Stabilité du Core',
        'goal-overweight': 'Objectif:',
        'goal-weightloss': 'Perte de Poids',
        'cardio-walk': 'Marche Rapide',
        'cardio-cycle': 'Cyclisme',
        'cardio-elliptical': 'Elliptique',
        'cardio-tip': 'Concentrez-vous sur le maintien d\'une fréquence cardiaque élevée.',
        'strength-overweight-desc': 'Exercices au poids du corps uniquement. Utilisez un support de chaise/mur si nécessaire.',
        'ex-title': 'Exercices',
        'ex-wall-pushups': 'Pompes murales',
        'ex-chair-squats': 'Squats sur chaise',
        'ex-sit-stand': 's\'asseoir et se lever',
        'ex-knee-raises': 'Levées de genoux',
        'ex-marching': 'marcher sur place',
        'ex-tip-title': 'Conseil',
        'ex-tip-text': 'Échauffez-vous et récupérez toujours pendant 10 minutes. L\'hydratation est essentielle. La cohérence est plus importante que l\'intensité à ce stade.',
        'fitness-level': 'Niveau de forme physique:',
        'level-beginner': 'Débutant/Intermédiaire',
        'schedule-suggestion': 'Suggestion d\'horaire hebdomadaire:',
        'day-mon': 'Lundi',
        'day-tue': 'Mardi',
        'day-wed': 'Mercredi',
        'day-thu': 'Jeudi',
        'day-fri': 'Vendredi',
        'day-sat': 'Samedi',
        'day-sun': 'Dimanche',
        'act-strength': 'Force Corps Entier',
        'act-cardio': 'Cardio',
        'act-rest': 'Repos/Récupération Active',
        'act-long-cardio': 'Longue Session de Cardio',
        'admin-col-name': 'Nom',
        'admin-col-age': 'Âge',
        'admin-col-gender': 'Genre',
        'admin-col-height': 'Taille (cm)',
        'admin-col-weight': 'Poids (kg)',
        'admin-col-bmi': 'IMC',
        'admin-col-bmr': 'MB (cal)',
        'admin-col-diet': 'Préf. Alimentaire',
        'admin-col-timestamp': 'Horodatage',
    },
    'de': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - Personalisierte Fitness-Anleitung',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "Ihr persönlicher Weg zu Höchstform und Wohlbefinden. Klicken Sie auf 'INPUT', um Ihre Bewertung zu starten.",
        'landing-btn': 'Starten',
        'lang-label': 'Sprache:',

        // Navigation
        'nav-home': 'STARTSEITE',
        'nav-input': 'EINGABE',
        'nav-diet': 'ERNÄHRUNGSPLAN',
        'nav-exercise': 'ÜBUNGSPLAN',
        'nav-admin-info': 'ADMIN-INFO',
        'nav-reviews': 'BEWERTUNGEN',
        'nav-admin-login': 'ADMIN-LOGIN',

        // Input Form
        'input-header': 'GEBEN SIE IHRE DATEN EIN',
        'label-name': 'NAME',
        'label-height': 'GRÖSSE (CM)',
        'label-weight': 'GEWICHT (KG)',
        'label-age': 'ALTER (JAHRE)',
        'label-gender': 'GESCHLECHT',
        'label-preference': 'ERNÄHRUNGSPRÄFERENZ',
        'gender-male': 'Männlich',
        'gender-female': 'Weiblich',
        'gender-trans': 'Trans',
        'gender-other': 'Nicht spezifiziert (Homo/Andere)',
        'pref-veg': 'Vegetarisch',
        'pref-nonveg': 'Nicht-Vegetarisch',
        'pref-both': 'Beides', // ADDED
        'pref-select': 'Wählen Sie...',
        'input-submit-btn': 'PLAN ERSTELLEN',
        'input-reset-btn': 'FORMULAR ZURÜCKSETZEN',
        'input-alert-invalid': 'Bitte füllen Sie alle Felder mit gültigen Zahlen aus.',
        
        // Results/Plan Headers
        'bmi-header': 'BMI-ERGEBNIS',
        'diet-plan-header': 'IHR PERSONALISIERTER ERNÄHRUNGSPLAN',
        'exercise-plan-header': 'IHR PERSONALISIERTER ÜBUNGSPLAN',

        // BMI Statuses
        'status-underweight': 'Untergewichtig',
        'status-normal': 'Normalgewicht',
        'status-overweight': 'Übergewichtig',
        'status-obese': 'Fettleibig',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': 'Hinweis: Kalorienziele sind Schätzungen. Passen Sie sie basierend auf Ihrem Aktivitätsniveau und ärztlicher Beratung an.',
        'diet-disclaimer': '*Konsultieren Sie immer einen zertifizierten Ernährungsberater, bevor Sie größere Ernährungsumstellungen vornehmen.',
        'exercise-disclaimer': '*Konsultieren Sie immer einen Arzt, bevor Sie mit einem neuen Fitnessprogramm beginnen.',

        // Review Page
        'review-header': 'BENUTZERBEWERTUNGEN & FEEDBACK',
        'label-reviewer-name': 'IHR NAME',
        'label-review-text': 'IHR FEEDBACK',
        'review-submit-btn': 'BEWERTUNG ABSENDEN',
        'review-list-header': 'Neueste Bewertungen',
        'review-new-tag': '(Neue Bewertung)',
        'review-alert-success': 'Vielen Dank für Ihr Feedback! Ihre Bewertung wurde lokal hinzugefügt.',

        // Admin
        'admin-login-header': 'ADMIN-LOGIN',
        'label-admin-id': 'ADMIN-BENUTZER-ID',
        'label-admin-password': 'PASSWORT',
        'admin-login-btn': 'EINLOGGEN',
        'admin-data-header': 'BENUTZERMETRIK-DATENBANK',
        'admin-auth-text': 'Authentifizierung...',
        'admin-logout-btn': 'Abmelden',
        
        // Dynamic Content
        'bmr-unit': 'Kalorien/Tag',
        'diet-table-meal': 'Mahlzeit',
        'diet-table-veg': 'Vegetarische Option',
        'diet-table-nonveg': 'Nicht-Vegetarische Option',
        'diet-table-focus': 'Fokus',
        'meal-breakfast': 'Frühstück',
        'meal-lunch': 'Mittagessen',
        'meal-snack': 'Snack',
        'meal-dinner': 'Abendessen',
        'meal-veg-b': 'Haferflocken mit Beeren und Nüssen (ballaststoffreich)',
        'meal-nonveg-b': '4 Eiweiß + 2 ganze Eier, Mehrkorntoast',
        'meal-veg-l': 'Linsensuppe/Dal, brauner Reis, großer grüner Salat',
        'meal-nonveg-l': 'Gegrilltes Hähnchen/Fisch, große Portion gemischtes Gemüse',
        'meal-veg-s': 'Apfel/Banane mit 10 Mandeln',
        'meal-nonveg-s': 'Eine Handvoll Mandeln oder ein Molkenprotein-Shake',
        'meal-veg-d': 'Paneer Bhurji mit Vollkorn-Roti',
        'meal-nonveg-d': 'Gegrillter Fisch oder Pute, gedämpftes Gemüse',
        'focus-protein-carb': 'Hohes Protein, komplexe Kohlenhydrate',
        'focus-balanced': 'Ausgewogene Mahlzeit, essentielle Nährstoffe',
        'focus-fats-energy': 'Gesunde Fette & schnelle Energie',
        'focus-lean-carb': 'Mageres Protein, leichte Kohlenhydrate',
        'nutrient-goals-header': 'Nährstoffziele:',
        'daily-cal-label': 'Geschätzte tägliche Kalorien:',
        'cal-goal-note': 'für mäßigen Gewichtsverlust/Erhaltung',
        'target-protein-label': 'Zielprotein:',
        'protein-unit': 'Gramm/Tag',
        'hydration-label': 'Hydratation:',
        'hydration-unit': 'Liter Wasser täglich.',
        'goal-normal': 'Ziel:',
        'goal-muscle': 'Muskelaufbau',
        'cardio-label': 'Cardio',
        'cardio-duration': 'Minuten',
        'cardio-run': 'Laufen',
        'cardio-hiit': 'Hochintensives Intervalltraining (HIIT)',
        'strength-label': 'Kraft',
        'strength-normal-desc': 'Ganzkörpertraining mit Fokus auf Verbundübungen zur Maximierung des Muskelwachstums.',
        'ex-table-ex': 'Übung',
        'ex-table-sets': 'Sätze',
        'ex-table-reps': 'Wiederholungen/Dauer',
        'ex-table-focus': 'Hauptfokus',
        'ex-squats': 'Kniebeugen',
        'ex-reps': 'Wiederholungen',
        'ex-pushups': 'Liegestütze',
        'ex-maxreps': 'Maximale Wiederholungen',
        'ex-rows': 'Kurzhantelrudern',
        'ex-reps-side': 'Wiederholungen/Seite',
        'ex-plank': 'Plank',
        'ex-seconds': 'Sekunden',
        'ex-focus-legs': 'Beine, Rumpf',
        'ex-focus-chest': 'Brust, Trizeps, Schultern',
        'ex-focus-back': 'Rücken, Bizeps',
        'ex-focus-core': 'Rumpfstabilität',
        'goal-overweight': 'Ziel:',
        'goal-weightloss': 'Gewichtsverlust',
        'cardio-walk': 'Zügiges Gehen',
        'cardio-cycle': 'Radfahren',
        'cardio-elliptical': 'Ellipsentrainer',
        'cardio-tip': 'Konzentrieren Sie sich darauf, eine erhöhte Herzfrequenz aufrechtzuerhalten.',
        'strength-overweight-desc': 'Nur Körpergewichtsübungen. Verwenden Sie bei Bedarf Stuhl-/Wandunterstützung.',
        'ex-title': 'Übungen',
        'ex-wall-pushups': 'Wandliegestütze',
        'ex-chair-squats': 'Stuhl-Kniebeugen',
        'ex-sit-stand': 'Sitzen bis Stehen',
        'ex-knee-raises': 'Kniehebel',
        'ex-marching': 'Marschieren an Ort und Stelle',
        'ex-tip-title': 'Tipp',
        'ex-tip-text': 'Immer 10 Minuten aufwärmen und abkühlen. Hydratation ist der Schlüssel. Konsistenz ist in dieser Phase wichtiger als Intensität.',
        'fitness-level': 'Fitness-Level:',
        'level-beginner': 'Anfänger/Mittelstufe',
        'schedule-suggestion': 'Vorschlag für den Wochenplan:',
        'day-mon': 'Montag',
        'day-tue': 'Dienstag',
        'day-wed': 'Mittwoch',
        'day-thu': 'Donnerstag',
        'day-fri': 'Freitag',
        'day-sat': 'Samstag',
        'day-sun': 'Sonntag',
        'act-strength': 'Ganzkörperkraft',
        'act-cardio': 'Cardio',
        'act-rest': 'Ruhe/Aktive Erholung',
        'act-long-cardio': 'Lange Cardio-Einheit',
        'admin-col-name': 'Name',
        'admin-col-age': 'Alter',
        'admin-col-gender': 'Geschlecht',
        'admin-col-height': 'Größe (cm)',
        'admin-col-weight': 'Gewicht (kg)',
        'admin-col-bmi': 'BMI',
        'admin-col-bmr': 'GUB (kcal)',
        'admin-col-diet': 'Ernähr. Préf.',
        'admin-col-timestamp': 'Zeitstempel',
    },
    'pt': {
        // Meta & Landing
        'meta-title': 'FIT-X-STETICS - Orientação Fitness Personalizada',
        'landing-title': 'FIT-X-STETICS',
        'landing-subtitle': "Sua jornada personalizada para a saúde e bem-estar. Clique em 'INPUT' para começar sua avaliação.",
        'landing-btn': 'Começar',
        'lang-label': 'Idioma:',

        // Navigation
        'nav-home': 'INÍCIO',
        'nav-input': 'ENTRADA',
        'nav-diet': 'PLANO DE DIETA',
        'nav-exercise': 'PLANO DE EXERCÍCIOS',
        'nav-admin-info': 'INFO ADMIN',
        'nav-reviews': 'AVALIAÇÕES',
        'nav-admin-login': 'LOGIN ADMIN',

        // Input Form
        'input-header': 'INSIRA SEUS DETALHES',
        'label-name': 'NOME',
        'label-height': 'ALTURA (CM)',
        'label-weight': 'PESO (KG)',
        'label-age': 'IDADE (ANOS)',
        'label-gender': 'GÊNERO',
        'label-preference': 'PREFERÊNCIA ALIMENTAR',
        'gender-male': 'Masculino',
        'gender-female': 'Feminino',
        'gender-trans': 'Trans',
        'gender-other': 'Não especificado (Homo/Outro)',
        'pref-veg': 'Vegetariano',
        'pref-nonveg': 'Não Vegetariano',
        'pref-both': 'Ambos', // ADDED
        'pref-select': 'Selecionar...',
        'input-submit-btn': 'GERAR PLANO',
        'input-reset-btn': 'REINICIAR FORMULÁRIO',
        'input-alert-invalid': 'Por favor, preencha todos os campos com números válidos.',
        
        // Results/Plan Headers
        'bmi-header': 'RESULTADO IMC',
        'diet-plan-header': 'SEU PLANO DE DIETA PERSONALIZADO',
        'exercise-plan-header': 'SEU PLANO DE EXERCÍCIOS PERSONALIZADO',

        // BMI Statuses
        'status-underweight': 'Abaixo do Peso',
        'status-normal': 'Peso Normal',
        'status-overweight': 'Sobrepeso',
        'status-obese': 'Obeso',

        // Diet/Exercise Plan content (simplified for this context)
        'diet-note': 'Nota: As metas de calorias são estimativas. Ajuste com base no seu nível de atividade e consulta médica.',
        'diet-disclaimer': '*Sempre consulte um nutricionista certificado antes de fazer grandes alterações dietéticas.',
        'exercise-disclaimer': '*Sempre consulte um médico antes de iniciar qualquer novo regime de fitness.',

        // Review Page
        'review-header': 'AVALIAÇÕES E FEEDBACK DO USUÁRIO',
        'label-reviewer-name': 'SEU NOME',
        'label-review-text': 'SEU FEEDBACK',
        'review-submit-btn': 'ENVIAR AVALIAÇÃO',
        'review-list-header': 'Últimas Avaliações',
        'review-new-tag': '(Nova Avaliação)',
        'review-alert-success': 'Obrigado pelo seu feedback! Sua avaliação foi adicionada localmente.',

        // Admin
        'admin-login-header': 'LOGIN ADMIN',
        'label-admin-id': 'ID DE USUÁRIO ADMIN',
        'label-admin-password': 'SENHA',
        'admin-login-btn': 'ENTRAR',
        'admin-data-header': 'BANCO DE DADOS DE MÉTRICAS DO USUÁRIO',
        'admin-auth-text': 'Autenticando...',
        'admin-logout-btn': 'Sair',
        
        // Dynamic Content
        'bmr-unit': 'Calorias/dia',
        'diet-table-meal': 'Refeição',
        'diet-table-veg': 'Opção Vegetariana',
        'diet-table-nonveg': 'Opção Não Vegetariana',
        'diet-table-focus': 'Foco',
        'meal-breakfast': 'Café da Manhã',
        'meal-lunch': 'Almoço',
        'meal-snack': 'Lanche',
        'meal-dinner': 'Jantar',
        'meal-veg-b': 'Aveia com frutas vermelhas e nozes (rica em fibras)',
        'meal-nonveg-b': '4 Claras de Ovo + 2 Ovos Inteiros, Torrada Multigrãos',
        'meal-veg-l': 'Sopa de lentilha/Dal, Arroz Integral, salada verde grande',
        'meal-nonveg-l': 'Frango/Peixe Grelhado, grande porção de vegetais mistos',
        'meal-veg-s': 'Maçã/Banana com 10 amêndoas',
        'meal-nonveg-s': 'Punhado de amêndoas ou um shake de proteína whey',
        'meal-veg-d': 'Paneer Bhurji com roti de trigo integral',
        'meal-nonveg-d': 'Peixe ou Peru Grelhado, vegetais cozidos no vapor',
        'focus-protein-carb': 'Alto Teor de Proteínas, Carboidratos Complexos',
        'focus-balanced': 'Refeição Balanceada, Nutrientes Essenciais',
        'focus-fats-energy': 'Gorduras Saudáveis e Energia Rápida',
        'focus-lean-carb': 'Proteína Magra, Carboidratos Leves',
        'nutrient-goals-header': 'Metas Nutricionais:',
        'daily-cal-label': 'Calorias Diárias Estimadas:',
        'cal-goal-note': 'para perda de peso/manutenção modesta',
        'target-protein-label': 'Target Protein:',
        'protein-unit': 'gramas/dia',
        'hydration-label': 'Hidratação:',
        'hydration-unit': 'Litros de água diariamente.',
        'goal-normal': 'Objetivo:',
        'goal-muscle': 'Construção Muscular',
        'cardio-label': 'Cardio',
        'cardio-duration': 'minutos',
        'cardio-run': 'Corrida',
        'cardio-hiit': 'Treinamento Intervalado de Alta Intensidade (HIIT)',
        'strength-label': 'Força',
        'strength-normal-desc': 'Rotina de corpo inteiro focada em movimentos compostos para maximizar o crescimento muscular.',
        'ex-table-ex': 'Exercício',
        'ex-table-sets': 'Séries',
        'ex-table-reps': 'Repetições/Duração',
        'ex-table-focus': 'Foco Principal',
        'ex-squats': 'Agachamentos',
        'ex-reps': 'repetições',
        'ex-pushups': 'Flexões',
        'ex-maxreps': 'Máximo de repetições',
        'ex-rows': 'Remadas com Halteres',
        'ex-reps-side': 'repetições/lado',
        'ex-plank': 'Prancha',
        'ex-seconds': 'segundos',
        'ex-focus-legs': 'Pernas, Core',
        'ex-focus-chest': 'Peito, Tríceps, Ombros',
        'ex-focus-back': 'Costas, Bíceps',
        'ex-focus-core': 'Estabilidade do Core',
        'goal-overweight': 'Objetivo:',
        'goal-weightloss': 'Perda de Peso',
        'cardio-walk': 'Caminhada Rápida',
        'cardio-cycle': 'Ciclismo',
        'cardio-elliptical': 'Elíptico',
        'cardio-tip': 'Concentre-se em manter uma frequência cardíaca elevada.',
        'strength-overweight-desc': 'Apenas exercícios de peso corporal. Use apoio de cadeira/parede conforme necessário.',
        'ex-title': 'Exercícios',
        'ex-wall-pushups': 'Flexões de Parede',
        'ex-chair-squats': 'Agachamentos com Cadeira',
        'ex-sit-stand': 'sentar para levantar',
        'ex-knee-raises': 'Elevação de Joelhos',
        'ex-marching': 'marchar no lugar',
        'ex-tip-title': 'Dica',
        'ex-tip-text': 'Sempre aqueça e desaqueça por 10 minutos. A hidratação é fundamental. A consistência é mais importante do que a intensidade nesta fase.',
        'fitness-level': 'Nível de Fitness:',
        'level-beginner': 'Iniciante/Intermediário',
        'schedule-suggestion': 'Sugestão de Cronograma Semanal:',
        'day-mon': 'Segunda-feira',
        'day-tue': 'Terça-feira',
        'day-wed': 'Quarta-feira',
        'day-thu': 'Quinta-feira',
        'day-fri': 'Sexta-feira',
        'day-sat': 'Sábado',
        'day-sun': 'Domingo',
        'act-strength': 'Força Corporal Total',
        'act-cardio': 'Cardio',
        'act-rest': 'Descanso/Recuperação Ativa',
        'act-long-cardio': 'Longa Sessão de Cardio',
        'admin-col-name': 'Nome',
        'admin-col-age': 'Idade',
        'admin-col-gender': 'Gênero',
        'admin-col-height': 'Altura (cm)',
        'admin-col-weight': 'Peso (kg)',
        'admin-col-bmi': 'IMC',
        'admin-col-bmr': 'TMB (cal)',
        'admin-col-diet': 'Pref. Dieta',
        'admin-col-timestamp': 'Carimbo de Data/Hora',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('metrics-form');
    const navLinks = document.querySelectorAll('#global-nav .nav-links a[data-page]');
    const allPages = document.querySelectorAll('.page');
    const reviewForm = document.getElementById('review-form');
    // NEW: Admin elements
    const adminLoginForm = document.getElementById('admin-login-form');
    const userDataContainer = document.getElementById('user-data-container');

    // NEW: Language elements and setup
    const languageSelect = document.getElementById('language-select');
    const htmlElement = document.documentElement; // Reference to <html> for lang attribute
    let currentLanguage = localStorage.getItem('userLanguage') || 'en'; // Default language

    // NEW: Data storage for users (using localStorage for persistence)
    let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];

    // --- Page Navigation Logic ---
    window.showPage = function(pageId, clickedElement = null) {
        // 1. Hide all pages
        allPages.forEach(page => {
            page.classList.remove('active');
            page.classList.add('hidden');
        });

        // 2. Show the requested page
        const newPage = document.getElementById(pageId);
        if (newPage) {
            newPage.classList.remove('hidden');
            // Timeout allows CSS transitions to work after removing 'hidden'
            setTimeout(() => {
                newPage.classList.add('active');
            }, 10); 
        }

        // 3. Update active navigation link
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = clickedElement || document.querySelector(`#global-nav .nav-links a[data-page="${pageId}"]`);
        if (activeLink) activeLink.classList.add('active');
        
        window.scrollTo(0, 0); // Scroll to top on page change
    }

    // --- Localization Functions ---

    // Function to apply translations
    function updateAllText(lang) {
        const T = LOCALIZED_TEXT[lang] || LOCALIZED_TEXT['en'];
        
        // 1. Update HTML elements with data-localize-id attribute
        document.querySelectorAll('[data-localize-id]').forEach(element => {
            const key = element.getAttribute('data-localize-id');
            if (T[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = T[key];
                } else if (element.tagName === 'TITLE') {
                    document.title = T[key];
                } else {
                    element.textContent = T[key];
                }
            }
        });
        
        // 2. Update all language options with their localized text
        // This is a special update for the <option> elements to ensure they display the language name
        document.querySelector('#language-select option[value="en"]').textContent = 'English';
        document.querySelector('#language-select option[value="hi"]').textContent = 'हिन्दी (Hindi)';
        document.querySelector('#language-select option[value="es"]').textContent = 'Español (Spanish)';
        document.querySelector('#language-select option[value="ja"]').textContent = '日本語 (Japanese)';
        document.querySelector('#language-select option[value="ko"]').textContent = '한국어 (Korean)';
        document.querySelector('#language-select option[value="zh"]').textContent = '中文 (Chinese)';
        document.querySelector('#language-select option[value="id"]').textContent = 'Bahasa Indonesia (Indonesian)';
        document.querySelector('#language-select option[value="th"]').textContent = 'ภาษาไทย (Thai)';
        document.querySelector('#language-select option[value="fr"]').textContent = 'Français (French)';
        document.querySelector('#language-select option[value="de"]').textContent = 'Deutsch (German)';
        document.querySelector('#language-select option[value="pt"]').textContent = 'Português (Portuguese)';

        // 3. Update dynamic content that is generated by JS
        updateResultBox();
        updateDietPlan(); 
        updateExercisePlan();
    }

    // Function to set the language and update UI (Made global for initial setup)
    window.setLanguage = function(lang) {
        currentLanguage = lang;
        localStorage.setItem('userLanguage', lang);
        document.documentElement.lang = lang; 
        updateAllText(lang);
        if (languageSelect) {
            languageSelect.value = lang;
        }
    }

    // Event listener for language change
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // --- Form Submission and Main Logic ---
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const dietPreference = document.getElementById('diet-preference').value;
        const T = LOCALIZED_TEXT[currentLanguage] || LOCALIZED_TEXT['en'];

        if (isNaN(height) || isNaN(weight) || isNaN(age) || !name || !gender || !dietPreference) {
            alert(T['input-alert-invalid']);
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        
        // Mifflin-St Jeor Equation for BMR
        let bmr = (10 * weight) + (6.25 * height) - (5 * age);
        bmr += (gender === 'male' || gender === 'trans') ? 5 : -161; // Simplified for trans/other

        const userData = {
            id: Date.now(),
            name: name,
            height: height,
            weight: weight,
            age: age,
            gender: gender,
            dietPreference: dietPreference,
            bmi: bmi.toFixed(2),
            bmr: Math.round(bmr),
            timestamp: new Date().toLocaleString()
        };

        // Save data
        userDatabase.push(userData);
        localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
        
        // Update UI
        updateResultBox(userData);
        showPage('result-page');
    });

    function getBMIStatus(bmi) {
        if (bmi < 18.5) return 'underweight';
        if (bmi >= 18.5 && bmi < 24.9) return 'normal';
        if (bmi >= 25 && bmi < 29.9) return 'overweight';
        return 'obese';
    }

    function updateResultBox(data = userDatabase[userDatabase.length - 1]) {
        if (!data) return;

        const T = LOCALIZED_TEXT[currentLanguage] || LOCALIZED_TEXT['en'];
        const bmiStatusKey = 'status-' + getBMIStatus(parseFloat(data.bmi));
        const bmiStatusText = T[bmiStatusKey];
        
        const content = document.getElementById('bmi-result-content');
        
        content.innerHTML = `
            <h3>${data.name}'s Metrics</h3>
            <p><strong>BMI (Body Mass Index):</strong> ${data.bmi}</p>
            <p><strong>Status:</strong> <span class="status-badge status-${getBMIStatus(parseFloat(data.bmi))}">${bmiStatusText}</span></p>
            <p><strong>BMR (Basal Metabolic Rate):</strong> ${data.bmr} ${T['bmr-unit'] || 'Calories/day'}</p>
            <p><strong>Goal Calorie Intake (Maintenance):</strong> ${data.bmr} - ${data.bmr + 300} ${T['bmr-unit'] || 'Calories/day'}</p>
            <p style="margin-top: 15px; font-size: 0.9em; color: var(--accent-color);">
                ${T['diet-note']}
            </p>
        `;
    }

    // --- Diet Plan Generation (Refactored to handle 'both' preference) ---
    function updateDietPlan(data = userDatabase[userDatabase.length - 1]) {
        const dietContent = document.getElementById('diet-plan-content');
        if (!data) {
            dietContent.innerHTML = '<p style="text-align: center;">Please submit your metrics first to generate a personalized diet plan.</p>';
            return;
        }

        const T = LOCALIZED_TEXT[currentLanguage] || LOCALIZED_TEXT['en'];
        const preference = data.dietPreference; // 'vegetarian', 'non-vegetarian', or 'both'
        const maintenanceCal = data.bmr;
        let proteinGoal = Math.round(data.weight * 1.5); // 1.5g per kg for general fitness

        let dietTable = '';
        const mealRows = `
            <tr>
                <td>${T['meal-breakfast'] || 'Breakfast'}</td>
                ${preference === 'both' || preference === 'vegetarian' ? `<td>${T['meal-veg-b'] || 'Oats with berries and nuts (high fiber)'}</td>` : ''}
                ${preference === 'both' || preference === 'non-vegetarian' ? `<td>${T['meal-nonveg-b'] || '4 Egg Whites + 2 Whole Eggs, Multigrain Toast'}</td>` : ''}
                <td>${T['focus-protein-carb'] || 'High Protein, Complex Carbs'}</td>
            </tr>
            <tr>
                <td>${T['meal-lunch'] || 'Lunch'}</td>
                ${preference === 'both' || preference === 'vegetarian' ? `<td>${T['meal-veg-l'] || 'Lentil soup/Dal, Brown Rice, large green salad'}</td>` : ''}
                ${preference === 'both' || preference === 'non-vegetarian' ? `<td>${T['meal-nonveg-l'] || 'Grilled Chicken/Fish, large portion of mixed vegetables'}</td>` : ''}
                <td>${T['focus-balanced'] || 'Balanced Meal, Essential Nutrients'}</td>
            </tr>
            <tr>
                <td>${T['meal-snack'] || 'Snack'}</td>
                ${preference === 'both' || preference === 'vegetarian' ? `<td>${T['meal-veg-s'] || 'Apple/Banana with 10 almonds'}</td>` : ''}
                ${preference === 'both' || preference === 'non-vegetarian' ? `<td>${T['meal-nonveg-s'] || 'Handful of almonds or a whey protein shake'}</td>` : ''}
                <td>${T['focus-fats-energy'] || 'Healthy Fats & Quick Energy'}</td>
            </tr>
            <tr>
                <td>${T['meal-dinner'] || 'Dinner'}</td>
                ${preference === 'both' || preference === 'vegetarian' ? `<td>${T['meal-veg-d'] || 'Paneer Bhurji with whole-wheat roti'}</td>` : ''}
                ${preference === 'both' || preference === 'non-vegetarian' ? `<td>${T['meal-nonveg-d'] || 'Grilled Fish or Turkey, Steamed veggies'}</td>` : ''}
                <td>${T['focus-lean-carb'] || 'Lean Protein, Light Carbs'}</td>
            </tr>
        `;

        if (preference === 'both') {
            // 4-column table for 'both'
            dietTable = `
                <table class="diet-table">
                    <thead>
                        <tr>
                            <th>${T['diet-table-meal'] || 'Meal'}</th>
                            <th>${T['diet-table-veg'] || 'Vegetarian Option'}</th>
                            <th>${T['diet-table-nonveg'] || 'Non-Vegetarian Option'}</th>
                            <th>${T['diet-table-focus'] || 'Focus'}</th>
                        </tr>
                    </thead>
                    <tbody>${mealRows}</tbody>
                </table>
            `;
        } else {
            // 3-column table for 'vegetarian' or 'non-vegetarian'
            const isVeg = preference === 'vegetarian';
            dietTable = `
                <table class="diet-table">
                    <thead>
                        <tr>
                            <th>${T['diet-table-meal'] || 'Meal'}</th>
                            <th>${isVeg ? (T['diet-table-veg'] || 'Vegetarian Option') : (T['diet-table-nonveg'] || 'Non-Vegetarian Option')}</th>
                            <th>${T['diet-table-focus'] || 'Focus'}</th>
                        </tr>
                    </thead>
                    <tbody>${mealRows}</tbody>
                </table>
            `;
        }

        dietContent.innerHTML = dietTable + `
            <div class="plan-summary">
                <h4>${T['nutrient-goals-header'] || 'Nutrient Goals:'}</h4>
                <p><strong>${T['daily-cal-label'] || 'Estimated Daily Calories:'}</strong> ${maintenanceCal - 300} to ${maintenanceCal} (${T['cal-goal-note'] || 'for modest weight loss/maintenance'})</p>
                <p><strong>${T['target-protein-label'] || 'Target Protein:'}</strong> ${proteinGoal} ${T['protein-unit'] || 'grams/day'}</p>
                <p><strong>${T['hydration-label'] || 'Hydration:'}</strong> 3-4 ${T['hydration-unit'] || 'Litres of water daily.'}</p>
            </div>
            <p style="margin-top: 20px; font-size: 0.9rem; color: #aaa;">${T['diet-disclaimer']}</p>
        `;
    }

    // --- Exercise Plan Generation ---
    function updateExercisePlan(data = userDatabase[userDatabase.length - 1]) {
        const exerciseContent = document.getElementById('exercise-plan-content');
        if (!data) {
            exerciseContent.innerHTML = '<p style="text-align: center;">Please submit your metrics first to generate a personalized exercise plan.</p>';
            return;
        }
        
        const T = LOCALIZED_TEXT[currentLanguage] || LOCALIZED_TEXT['en'];
        const bmi = parseFloat(data.bmi);
        let plan = '';
        
        if (bmi < 25) { // Normal/Underweight
            plan = `
                <div class="plan-details-item">
                    <h4>${T['goal-normal'] || 'Goal:'} ${T['status-normal']} & ${T['goal-muscle'] || 'Muscle Building'}</h4>
                    <p><strong>${T['cardio-label'] || 'Cardio'} (3-4x/week):</strong> 30-45 ${T['cardio-duration'] || 'minutes'} of **${T['cardio-run'] || 'Running'}** or **${T['cardio-hiit'] || 'High-Intensity Interval Training (HIIT)'}**.</p>
                    <p><strong>${T['strength-label'] || 'Strength'} (3x/week):</strong> ${T['strength-normal-desc'] || 'Full-body routine focusing on compound movements to maximize muscle growth.'}</p>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>${T['ex-table-ex'] || 'Exercise'}</th>
                                <th>${T['ex-table-sets'] || 'Sets'}</th>
                                <th>${T['ex-table-reps'] || 'Reps/Duration'}</th>
                                <th>${T['ex-table-focus'] || 'Primary Focus'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>${T['ex-squats'] || 'Squats'}</td><td>3</td><td>10-12 ${T['ex-reps'] || 'reps'}</td><td>${T['ex-focus-legs'] || 'Legs, Core'}</td></tr>
                            <tr><td>${T['ex-pushups'] || 'Push-ups'}</td><td>3</td><td>${T['ex-maxreps'] || 'Max reps'}</td><td>${T['ex-focus-chest'] || 'Chest, Triceps, Shoulders'}</td></tr>
                            <tr><td>${T['ex-rows'] || 'Dumbbell Rows'}</td><td>3</td><td>10-12 ${T['ex-reps-side'] || 'reps/side'}</td><td>${T['ex-focus-back'] || 'Back, Biceps'}</td></tr>
                            <tr><td>${T['ex-plank'] || 'Plank'}</td><td>3</td><td>45-60 ${T['ex-seconds'] || 'seconds'}</td><td>${T['ex-focus-core'] || 'Core Stability'}</td></tr>
                        </tbody>
                    </table>
                </div>
            `;
        } else if (bmi >= 25) { // Overweight/Obese
            plan = `
                <div class="plan-details-item">
                    <h4>${T['goal-overweight'] || 'Goal:'} ${T['status-overweight']} & ${T['goal-weightloss'] || 'Weight Loss'}</h4>
                    <p><strong>${T['cardio-label'] || 'Cardio'} (4-5x/week):</strong> 45-60 ${T['cardio-duration'] || 'minutes'} of **${T['cardio-walk'] || 'Brisk Walking'}**, **${T['cardio-cycle'] || 'Cycling'}**, or **${T['cardio-elliptical'] || 'Elliptical'}**. ${T['cardio-tip'] || 'Focus on maintaining an elevated heart rate.'}</p>
                    <p><strong>${T['strength-label'] || 'Strength'} (2x/week):</strong> ${T['strength-overweight-desc'] || 'Bodyweight exercises only. Use chair/wall support as needed.'}</p>
                    <p><strong>${T['ex-title'] || 'Exercises'}:</strong> **${T['ex-wall-pushups'] || 'Wall Push-ups'}**, **${T['ex-chair-squats'] || 'Chair Squats'}** (${T['ex-sit-stand'] || 'sit to stand'}), **${T['ex-knee-raises'] || 'Knee-raises'}** (${T['ex-marching'] || 'marching in place'}) .</p>
                    <p><strong>${T['ex-tip-title'] || 'Tip'}:</strong> ${T['ex-tip-text'] || 'Always warm up and cool down for 10 minutes. Hydration is key. Consistency is more important than intensity at this stage.'}</p>
                </div>
            `;
        }

        exerciseContent.innerHTML = `
            <div class="plan-details-item">
                <p><strong>${T['fitness-level'] || 'Fitness Level:'}</strong> ${T['level-beginner'] || 'Beginner/Intermediate'}</p>
                <p><strong>${T['schedule-suggestion'] || 'Weekly Schedule Suggestion:'}</strong></p>
                <ul class="schedule-list">
                    <li>${T['day-mon'] || 'Monday'}: ${T['act-strength'] || 'Full Body Strength'}</li>
                    <li>${T['day-tue'] || 'Tuesday'}: ${T['act-cardio'] || 'Cardio'}</li>
                    <li>${T['day-wed'] || 'Wednesday'}: ${T['act-rest'] || 'Rest/Active Recovery'}</li>
                    <li>${T['day-thu'] || 'Thursday'}: ${T['act-strength'] || 'Full Body Strength'}</li>
                    <li>${T['day-fri'] || 'Friday'}: ${T['act-cardio'] || 'Cardio'}</li>
                    <li>${T['day-sat'] || 'Saturday'}: ${T['act-long-cardio'] || 'Long Cardio Session'}</li>
                    <li>${T['day-sun'] || 'Sunday'}: ${T['act-rest'] || 'Rest'}</li>
                </ul>
            </div>
            ${plan}
            <p style="margin-top: 20px; font-size: 0.9rem; color: #aaa;">${T['exercise-disclaimer']}</p>
        `;
    }

    // --- Admin Login Logic ---
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const adminId = document.getElementById('admin-id').value;
        const adminPassword = document.getElementById('admin-password').value;

        // Simple hardcoded check (NOT secure for real applications)
        if (adminId === 'ABHISHEKNEGI2263' && adminPassword === 'ABHISHEKNEGI2263') {
            alert('Admin Login Successful!');
            showAdminData();
            showPage('admin-data');
        } else {
            alert('Invalid Credentials. Try ID: ***, Pass: ***');
        }
    });

    function showAdminData() {
        if (!userDataContainer) return;

        if (userDatabase.length === 0) {
            userDataContainer.innerHTML = '<p style="text-align: center;">No user data submitted yet.</p>';
            return;
        }

        const T = LOCALIZED_TEXT[currentLanguage] || LOCALIZED_TEXT['en'];
        
        const tableRows = userDatabase.map(data => `
            <tr>
                <td>${data.name}</td>
                <td>${data.age}</td>
                <td>${data.gender}</td>
                <td>${data.height}</td>
                <td>${data.weight}</td>
                <td class="${getBMIStatus(parseFloat(data.bmi)).toLowerCase()}">${data.bmi}</td>
                <td>${data.bmr}</td>
                <td>${data.dietPreference}</td>
                <td>${data.timestamp}</td>
            </tr>
        `).join('');

        userDataContainer.innerHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        <th>${T['admin-col-name'] || 'Name'}</th>
                        <th>${T['admin-col-age'] || 'Age'}</th>
                        <th>${T['admin-col-gender'] || 'Gender'}</th>
                        <th>${T['admin-col-height'] || 'Height (cm)'}</th>
                        <th>${T['admin-col-weight'] || 'Weight (kg)'}</th>
                        <th>${T['admin-col-bmi'] || 'BMI'}</th>
                        <th>${T['admin-col-bmr'] || 'BMR (cal)'}</th>
                        <th>${T['admin-col-diet'] || 'Diet Pref'}</th>
                        <th>${T['admin-col-timestamp'] || 'Timestamp'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        `;
    }

    // --- User Review Submission ---
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const reviewerName = document.getElementById('reviewer-name').value;
        const reviewText = document.getElementById('review-text').value;
        const reviewsList = document.querySelector('.reviews-list');
        const T = LOCALIZED_TEXT[currentLanguage] || LOCALIZED_TEXT['en'];

        const newReview = document.createElement('div');
        newReview.classList.add('review-item');
        newReview.innerHTML = `
            <p>"${reviewText}"</p>
            <p class="reviewer-name">- ${reviewerName} ${T['review-new-tag']}</p>
        `;
        
        // Remove old placeholder reviews to keep the list clean (optional but good practice)
        document.querySelectorAll('.placeholder-review').forEach(p => p.closest('.review-item').remove());
        
        // Add new review to the top of the list
        reviewsList.prepend(newReview); 

        reviewForm.reset();
        alert(T['review-alert-success']);
    });

    // --- Initial setup ---
    // Ensure default language is 'en' if nothing is stored
    const initialLang = localStorage.getItem('userLanguage') || 'en';
    setLanguage(initialLang); // This will load the stored language and run all translations
    
    showPage('landing-page');
});