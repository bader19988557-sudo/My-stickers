const stickers = [
    // --- تقنية وبرمجة (Tech & Coding) ---
    { id: 1, name: "مطور بايثون محترف", price: 12, category: "tech", icon: "🐍" },
    { id: 2, name: "بطريق لينكس", price: 10, category: "tech", icon: "🐧" },
    { id: 3, name: "جافا سكريبت نينجا", price: 12, category: "tech", icon: "💛" },
    { id: 4, name: "كود نظيف (Clean Code)", price: 14, category: "tech", icon: "💻" },
    { id: 5, name: "أوكتوكات GitHub", price: 11, category: "tech", icon: "🐙" },
    { id: 6, name: "الأمن السيبراني والهكر", price: 15, category: "tech", icon: "🔒" },
    { id: 7, name: "الذكاء الاصطناعي AI", price: 13, category: "tech", icon: "🤖" },
    { id: 8, name: "ذاكرة عشوائية RAM", price: 10, category: "tech", icon: "🧠" },
    { id: 9, name: "لوحة مفاتيح ميكانيكية", price: 14, category: "tech", icon: "⌨️" },
    { id: 10, name: "معالج قوي CPU", price: 15, category: "tech", icon: "⚙️" },
    { id: 11, name: "شعار HTML5", price: 11, category: "tech", icon: "🌐" },
    { id: 12, name: "تنسيقات CSS3", price: 11, category: "tech", icon: "🎨" },
    { id: 13, name: "قاعدة بيانات SQL", price: 13, category: "tech", icon: "🗄️" },
    { id: 14, name: "سحابة الحوسبة Cloud", price: 12, category: "tech", icon: "☁️" },
    { id: 15, name: "علة برمجية Bug", price: 10, category: "tech", icon: "🐛" },
    { id: 16, name: "تصحيح الأخطاء Debug", price: 12, category: "tech", icon: "🔍" },
    { id: 17, name: "شاشة التيرمينال سوداء", price: 12, category: "tech", icon: "📟" },
    { id: 18, name: "تطبيق لغة دوط Flutter", price: 13, category: "tech", icon: "📱" },
    { id: 19, name: "مجلد المشروع Project", price: 10, category: "tech", icon: "📁" },
    { id: 20, name: "مفتاح القفل السري", price: 11, category: "tech", icon: "🔑" },
    { id: 21, name: "شريحة إلكترونية Microchip", price: 15, category: "tech", icon: "🔲" },
    { id: 22, name: "شحن البطارية 100%", price: 10, category: "tech", icon: "🔋" },
    { id: 23, name: "نظام التشفير SSL", price: 14, category: "tech", icon: "🛡️" },
    { id: 24, name: "تحديث النظام Update", price: 11, category: "tech", icon: "🔄" },
    { id: 25, name: "كابل إيثرنت شبكة", price: 10, category: "tech", icon: "🔌" },

    // --- سيارات وتعديل (Cars & Tuning) ---
    { id: 26, name: "تيربو V8 خارق", price: 16, category: "cars", icon: "🏎️" },
    { id: 27, name: "جنوط سبورت عميقة", price: 15, category: "cars", icon: "🛞" },
    { id: 28, name: "مفتاح شد بستم ورشة", price: 12, category: "cars", icon: "🔧" },
    { id: 29, name: "علم التشيكر (سباق)", price: 14, category: "cars", icon: "🏁" },
    { id: 30, name: "دريفت واحتراق إطارات", price: 15, category: "cars", icon: "🔥" },
    { id: 31, name: "شاحن هواء تيربو", price: 14, category: "cars", icon: "💨" },
    { id: 32, name: "شغف السرعة والمقاومات", price: 16, category: "cars", icon: "⚡" },
    { id: 33, name: "زيت محركات السباق", price: 11, category: "cars", icon: "🛢️" },
    { id: 34, name: "عداد السرعة الأقصى", price: 15, category: "cars", icon: "⏱️" },
    { id: 35, name: "مساعدات رياضية Coilover", price: 14, category: "cars", icon: "🔩" },
    { id: 36, name: "عادم رياضي شكمان", price: 15, category: "cars", icon: "💨" },
    { id: 37, name: "فرامل بريمبو حمراء", price: 13, category: "cars", icon: "🛑" },
    { id: 38, name: "مفتاح سيارة ذكي", price: 12, category: "cars", icon: "🔑" },
    { id: 39, name: "مقصورة قيادة كربون", price: 16, category: "cars", icon: "💺" },
    { id: 40, name: "علبة تروس قير عادي", price: 14, category: "cars", icon: "🕹️" },
    { id: 41, name: "وقود أوكتان عالي", price: 12, category: "cars", icon: "⛽" },
    { id: 42, name: "بطارية سيارة جافة", price: 11, category: "cars", icon: "🔋" },
    { id: 43, name: "شمعات احتراق بوجيهات", price: 10, category: "cars", icon: "✨" },
    { id: 44, name: "مرآة جانبية رياضية", price: 12, category: "cars", icon: "🚙" },
    { id: 45, name: "سيارة كشف كلاسيكية", price: 15, category: "cars", icon: "🚗" },
    { id: 46, name: "شعار الورشة المعتمدة", price: 11, category: "cars", icon: "🛠️" },
    { id: 47, name: "رادار سرعة الطرق", price: 13, category: "cars", icon: "🚨" },
    { id: 48, name: "لوحة ترخيص مميزة", price: 14, category: "cars", icon: "🏷️" },
    { id: 49, name: "جهاز فحص OBD2", price: 15, category: "cars", icon: "💻" },
    { id: 50, name: "دفع رباعي 4x4 أوفريود", price: 16, category: "cars", icon: "⛰️" },

    // --- أنمي ومانغا (Anime & Manga) ---
    { id: 51, name: "طاقة السايان الخارقة", price: 14, category: "anime", icon: "⚡" },
    { id: 52, name: "عين الشارينجان الأسطورية", price: 15, category: "anime", icon: "👁️" },
    { id: 53, name: "سيف صائد الشياطين", price: 15, category: "anime", icon: "🗡️" },
    { id: 54, name: "جمجمة قراصنة ون بيس", price: 13, category: "anime", icon: "🏴‍☠️" },
    { id: 55, name: "قبضة البطل الخارق", price: 12, category: "anime", icon: "👊" },
    { id: 56, name: "قبعة لوفي القشية", price: 14, category: "anime", icon: "👒" },
    { id: 57, name: "سلاح النينجا الشوريكين", price: 11, category: "anime", icon: "🥷" },
    { id: 58, name: "فاكهة شيطان غامضة", price: 16, category: "anime", icon: "🍈" },
    { id: 59, name: "نكهة الرامن الياباني", price: 13, category: "anime", icon: "🍜" },
    { id: 60, name: "قناع العفريت الأنمي", price: 14, category: "anime", icon: "👺" },
    { id: 61, name: "مذكرة الموت Death Note", price: 14, category: "anime", icon: "📓" },
    { id: 62, name: "شعار فيلق الاستطلاع", price: 15, category: "anime", icon: "🛡️" },
    { id: 63, name: "كرة السلة الأسطورية", price: 12, category: "anime", icon: "🏀" },
    { id: 64, name: "عين الريارينجان المتقدمة", price: 16, category: "anime", icon: "👁️‍🗨️" },
    { id: 65, name: "تنانير الساموراي الحادة", price: 15, category: "anime", icon: "⚔️" },
    { id: 66, name: "طاقة الكي المدمرة", price: 14, category: "anime", icon: "💥" },
    { id: 67, name: "النمر الأسود كاكاشی", price: 13, category: "anime", icon: "🐾" },
    { id: 68, name: "سحابة أكاتسوكي الحمراء", price: 15, category: "anime", icon: "☁️" },
    { id: 69, name: "درع بطل الأنمي", price: 14, category: "anime", icon: "🛡️" },
    { id: 70, name: "نجمة النينجا البلاتينية", price: 12, category: "anime", icon: "⭐" },
    { id: 71, name: "إكسسوار شعر الأنمي", price: 10, category: "anime", icon: "🎀" },
    { id: 72, name: "عصابة الرأس المخفية", price: 13, category: "anime", icon: "🌀" },
    { id: 73, name: "مصباح الشارع الياباني", price: 11, category: "anime", icon: "🏮" },
    { id: 74, name: "بطاقة الألعاب الحربية", price: 12, category: "anime", icon: "🃏" },
    { id: 75, name: "شعار النصر الأنمي", price: 14, category: "anime", icon: "✌️" },

    // --- ألعاب وبلايستيشن (Gaming & PS5) ---
    { id: 76, name: "يد تحكم بلايستيشن DualSense", price: 15, category: "gaming", icon: "🎮" },
    { id: 77, name: "نظارة الواقع الافتراضي VR", price: 18, category: "gaming", icon: "🥽" },
    { id: 78, name: "تاج الفوز (Victory Royale)", price: 14, category: "gaming", icon: "👑" },
    { id: 79, name: "سيف الأساطير الحربي", price: 13, category: "gaming", icon: "⚔️" },
    { id: 80, name: "جهاز أركيد كلاسيكي", price: 12, category: "gaming", icon: "🕹️" },
    { id: 81, name: "كأس البطولة الذهبي", price: 15, category: "gaming", icon: "🏆" },
    { id: 82, name: "سماعة ألعاب RGB ضخمة", price: 16, category: "gaming", icon: "🎧" },
    { id: 83, name: "ماوس جيمز سريع خفيف", price: 14, category: "gaming", icon: "🖱️" },
    { id: 84, name: "شعار الجمجمة القتالية", price: 13, category: "gaming", icon: "💀" },
    { id: 85, name: "درع الحماية الحصين", price: 14, category: "gaming", icon: "🛡️" },
    { id: 86, name: "قنبلة يدوية تكتيكية", price: 11, category: "gaming", icon: "💣" },
    { id: 87, name: "جرعة طاقة سحرية HP", price: 12, category: "gaming", icon: "🧪" },
    { id: 88, name: "نجمة اللعب السريعة ⭐", price: 10, category: "gaming", icon: "⭐" },
    { id: 89, name: "صندوق الغنائم Loot Box", price: 13, category: "gaming", icon: "📦" },
    { id: 90, name: "شخصية بكسل كلاسيكية", price: 11, category: "gaming", icon: "👾" },
    { id: 91, name: "شعلة نار ألعاب الفيديو", price: 12, category: "gaming", icon: "🔥" },
    { id: 92, name: "هدف التصويب المباشر", price: 10, category: "gaming", icon: "🎯" },
    { id: 93, name: "مفتاح الانتقال للمرحلة التالية", price: 11, category: "gaming", icon: "🗝️" },
    { id: 94, name: "جوهرة الطاقة النادرة", price: 15, category: "gaming", icon: "💎" },
    { id: 95, name: "شعار الكلان المحترف", price: 14, category: "gaming", icon: "⚜️" },

    // --- ميمز وعبارات ساخرة (Funny & Memes) ---
    { id: 96, name: "وجه الضحكة الساخرة 🗿", price: 12, category: "funny", icon: "🗿" },
    { id: 97, name: "هذا العرض تحت السيطرة 🔥", price: 12, category: "funny", icon: "🔥" },
    { id: 98, name: "شعار القهوة والكافيين ☕", price: 11, category: "funny", icon: "☕" },
    { id: 99, name: "وجه القط المندهش 🐱", price: 13, category: "funny", icon: "🐱" },
    { id: 100, name: "رمز البرق السريع ⚡", price: 10, category: "funny", icon: "⚡" },
    { id: 101, name: "شبح لطيف خفيف 👻", price: 11, category: "funny", icon: "👻" },
    { id: 102, name: "وجه النظارات الشمسية 😎", price: 12, category: "funny", icon: "😎" },
    { id: 103, name: "علامة الخطر المبرمج ⚠️", price: 10, category: "funny", icon: "⚠️" },
    { id: 104, name: "الفضاء والكواكب 🪐", price: 14, category: "funny", icon: "🪐" },
    { id: 105, name: "صاروخ الإطلاق الصاروخي 🚀", price: 15, category: "funny", icon: "🚀" }
];

let cart = [];

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const cartSidebar = document.getElementById("cartSidebar");
const overlay = document.getElementById("overlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutFormSection = document.getElementById("checkoutFormSection");
const cartFooter = document.getElementById("cartFooter");

const appleModal = document.getElementById("appleModal");
const appleModalTotal = document.getElementById("appleModalTotal");
const appleStatusText = document.getElementById("appleStatusText");

function renderProducts(items) {
    productsGrid.innerHTML = "";
    items.forEach(sticker => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="sticker-preview">${sticker.icon}</div>
            <div>
                <h3 class="product-title">${sticker.name}</h3>
                <p class="product-price">${sticker.price} ر.س</p>
                <button class="add-btn" onclick="addToCart(${sticker.id})">أضف للسلة</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        const category = btn.dataset.category;
        renderProducts(category === "all" ? stickers : stickers.filter(s => s.category === category));
    });
});

searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    renderProducts(stickers.filter(s => s.name.toLowerCase().includes(term)));
});

function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        const product = stickers.find(s => s.id === id);
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">سلتك لا تزال فارغة..</p>';
        checkoutFormSection.style.display = "none";
        cartFooter.style.display = "none";
    } else {
        checkoutFormSection.style.display = "block";
        cartFooter.style.display = "block";
        cart.forEach(item => {
            count += item.qty;
            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                <div>
                    <strong>${item.icon} ${item.name}</strong>
                    <p style="color:#6e6e73; font-size:0.85rem;">${item.price * item.qty} ر.س</p>
                </div>
                <div class="qty-controls">
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                    <span style="margin: 0 8px; font-weight: bold;">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                </div>
            `;
            cartItemsContainer.appendChild(div);
        });
    }

    cartCount.textContent = count;
    cartTotal.textContent = `${getCartTotal()} ر.س`;
}

document.getElementById("openCartBtn").addEventListener("click", () => {
    cartSidebar.classList.add("open");
    overlay.classList.add("show");
});

function closeAllModals() {
    cartSidebar.classList.remove("open");
    appleModal.classList.remove("show");
    overlay.classList.remove("show");
}

document.getElementById("closeCartBtn").addEventListener("click", closeAllModals);
overlay.addEventListener("click", closeAllModals);

function validateAndSendOrder(paymentMethod) {
    const name = document.getElementById("buyerName").value.trim();
    const phone = document.getElementById("buyerPhone").value.trim();
    const address = document.getElementById("buyerAddress").value.trim();

    if (!name || !phone || !address) {
        alert("يرجى إدخال الاسم، رقم الجوال، والمدينة أولاً.");
        return false;
    }

    let message = `✨ *طلب جديد من متجر ملصقاتي* ✨\n\n`;
    message += `💳 *طريقة الدفع:* ${paymentMethod}\n`;
    message += `👤 *العميل:* ${name}\n`;
    message += `📱 *رقم الجوال:* ${phone}\n`;
    message += `📍 *العنوان:* ${address}\n\n`;
    message += `🛍️ *الطلبات:*\n`;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (${item.icon}) × ${item.qty} = ${item.price * item.qty} ر.س\n`;
    });

    message += `\n💰 *الإجمالي الشامل:* ${getCartTotal()} ر.س`;

    const ownerPhone = "966578667424";
    const whatsappURL = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    cart = [];
    updateCartUI();
    closeAllModals();
    document.getElementById("buyerName").value = "";
    document.getElementById("buyerPhone").value = "";
    document.getElementById("buyerAddress").value = "";
    return true;
}

document.getElementById("whatsappBtn").addEventListener("click", () => {
    validateAndSendOrder("الدفع عند الاستلام");
});

document.getElementById("applePayBtn").addEventListener("click", () => {
    const name = document.getElementById("buyerName").value.trim();
    const phone = document.getElementById("buyerPhone").value.trim();
    const address = document.getElementById("buyerAddress").value.trim();

    if (!name || !phone || !address) {
        alert("يرجى تعبئة بيانات التوصيل (الاسم، الجوال، المدينة) قبل الدفع.");
        return;
    }

    appleModalTotal.textContent = `${getCartTotal()} ر.س`;
    appleStatusText.textContent = "اضغط للتأكيد ببصمة الوجه (Face ID)";
    appleModal.classList.add("show");
});

document.getElementById("cancelAppleBtn").addEventListener("click", () => {
    appleModal.classList.remove("show");
});

document.getElementById("confirmApplePayBtn").addEventListener("click", () => {
    appleStatusText.textContent = "جاري التحقق من Face ID...";
    setTimeout(() => {
        appleStatusText.textContent = "✅ تم الدفع بنجاح!";
        setTimeout(() => {
            validateAndSendOrder("مدفوع عبر Apple Pay ");
        }, 800);
    }, 1000);
});

renderProducts(stickers);