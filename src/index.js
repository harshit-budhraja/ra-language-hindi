const hindiMessages = {
    ra: {
        action: {
            add_filter: 'प्राचल छन्नी लगाएँ',
            add: 'जोड़ें',
            back: 'पीछे जाएँ',
            bulk_actions: '१ वस्तु चुनी गयी |||| %{smart_count} वस्तुएँ चुनी गयीं',
            cancel: 'रद्द करें',
            clear_input_value: 'मूल्य साफ करें',
            clone: 'क्लोन करें',
            confirm: 'पक्का',
            create: 'सृजन करें',
            delete: 'मिटाएँ',
            edit: 'संपादित करें',
            export: 'निर्यात करें',
            list: 'सूची',
            refresh: 'ताज़ा करें',
            remove_filter: 'इस छन्नी को हटाएँ',
            remove: 'हटाएँ',
            save: 'सम्भालें',
            search: 'खोजें',
            show: 'दिखाएँ',
            sort: 'क्रमबद्ध करें',
            undo: 'अनकिया करें',
            unselect: 'चयन रद्द करें',
            expand: 'विस्तृत करें',
            close: 'बंद करें',
            open_menu: 'सूची खोलें',
            close_menu: 'सूची बंद करें',
        },
        boolean: {
            true: 'हाँ',
            false: 'नहीं',
            null: ' ',
        },
        page: {
            create: '%{name} बनाएँ',
            dashboard: 'डैश्बॉर्ड',
            edit: '%{name} #%{id}',
            error: 'कुछ गड़बड़ हुई है',
            list: '%{name}',
            loading: 'लोड हो रहा है',
            not_found: 'नहीं प्राप्त हुआ',
            show: '%{name} #%{id}',
            empty: 'ऐसा कोई %{name} नहीं',
            invite: 'क्या आप एक नया जोड़ना चाहेंगे?',
        },
        input: {
            file: {
                upload_several:
                    'अपलोड करने के लिए कुछ फ़ाइलें छोड़ें, या एक का चयन करने के लिए क्लिक करें ।',
                upload_single: 'अपलोड करने के लिए किसी फ़ाइल को ड्रॉप करें, या उसे चुनने के लिए क्लिक करें ।',
            },
            image: {
                upload_several:
                    'अपलोड करने के लिए कुछ चित्र छोड़ें, या एक का चयन करने के लिए क्लिक करें ।',
                upload_single:
                    'अपलोड करने के लिए कोई चित्र छोड़ें, या उसे चुनने के लिए क्लिक करें ।',
            },
            references: {
                all_missing: 'संदर्भ डेटा खोजने में असमर्थ ।',
                many_missing:
                    'संबंधित संदर्भों में से कम से कम अब उपलब्ध नहीं है ।',
                single_missing:
                    'संबद्ध संदर्भ अब उपलब्ध नहीं है ।',
            },
            password: {
                toggle_visible: 'पास्वर्ड छिपाएँ',
                toggle_hidden: 'पास्वर्ड दिखाएं',
            },
        },
        message: {
            about: 'जानकारी',
            are_you_sure: 'क्या आपको यकीन है?',
            bulk_delete_content:
                'क्या आप वाकई इसे हटाना चाहते हैं %{name}? |||| क्या आप वाकई %{smart_count} वस्तु को हटाना चाहते हैं?',
            bulk_delete_title:
                'मिटाएँ %{name} |||| मिटाएँ %{smart_count} %{name}',
            delete_content: 'क्या आप सुनिश्चित रूप से इस आइटम को मिटाना चाहते हैं?',
            delete_title: 'मिटाएँ %{name} #%{id}',
            details: 'विवरण',
            error:
                "क्लाइंट त्रुटि हुई और आपका अनुरोध पूरा नहीं किया जा सका ।",
            invalid_form: 'फॉर्म मान्य नहीं है। कृपया त्रुटियों की जाँच करें |',
            loading: 'पेज लोड हो रहा है, कृपया एक क्षण दें',
            no: 'नहीं',
            not_found:
                'या तो आपने एक गलत URL टाइप किया, या आपने एक खराब लिंक का अनुसरण किया |',
            yes: 'हाँ',
            unsaved_changes:
                "आपके कुछ परिवर्तन सहेजे नहीं गए थे। क्या आप वाकई उन्हें अनदेखा करना चाहते हैं?",
        },
        navigation: {
            no_results: 'कोई परिणाम नहीं मिला',
            no_more_results:
                'पृष्ठ संख्या %{page} सीमाओं से बाहर है। पिछले पृष्ठ का प्रयास करें।',
            page_out_of_boundaries: 'पृष्ठ संख्या %{page} सीमाओं से बाहर है।',
            page_out_from_end: 'अंतिम पृष्ठ के बाद नहीं जा सकते',
            page_out_from_begin: 'पृष्ठ 1 से पहले नहीं जा सकते',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            page_rows_per_page: 'प्रति पृष्ठ पंक्तियाँ:',
            next: 'अगला',
            prev: 'पिछला',
        },
        sort: {
            sort_by: 'इसके अनुसार क्रमबद्ध करें %{field} %{order}',
            ASC: 'आरोही',
            DESC: 'अवरोही',
        },
        auth: {
            auth_check_error: 'जारी रखने के लिए कृपया लॉग इन करें',
            user_menu: 'प्रोफ़ाइल',
            username: 'प्रयोक्ता नाम',
            password: 'पास्वर्ड',
            sign_in: 'लॉग इन',
            sign_in_error: 'प्रमाणीकरण विफल हुआ, कृपया पुनः प्रयास करें',
            logout: 'लॉग आउट',
        },
        notification: {
            updated: 'तत्व अपडेट किया गया |||| %{smart_count} तत्वों को अपडेट किया गया',
            created: 'तत्व बनाया गया',
            deleted: 'तत्व हटा दिया गया |||| %{smart_count} तत्वों को हटा दिया गया',
            bad_item: 'गलत तत्व',
            item_doesnt_exist: 'तत्व मौजूद नहीं है',
            http_error: 'सर्वर संचार त्रुटि',
            data_provider_error:
                'dataProvider त्रुटि। विवरण के लिए कंसोल की जाँच करें।',
            i18n_error:
                'निर्दिष्ट भाषा के लिए अनुवादों को लोड नहीं कर सकता',
            canceled: 'कार्रवाई रद्द',
            logged_out: 'आपका सत्र समाप्त हो गया है, कृपया पुन: कनेक्ट करें।',
        },
        validation: {
            required: 'अपेक्षित',
            minLength: 'कम से कम %{min} अक्षर होने चाहिए',
            maxLength: '%{max} अक्षर या उससे कम का होना चाहिए',
            minValue: 'कम से कम %{min} होना चाहिए',
            maxValue: '%{max} या उससे कम होना चाहिए',
            number: 'संख्या होनी चाहिए',
            email: 'वैध ईमेल होना चाहिए',
            oneOf: 'इनमें से एक होना चाहिए: %{options}',
            regex: 'एक विशिष्ट प्रारूप से मेल खाना चाहिए (regexp): %{pattern}',
        },
    },
};

export default hindiMessages;