// overlay-detail.js - 维度详情弹窗模块
// Creator: Zero skill

function injectDetailOverlay() {
    document.body.insertAdjacentHTML('beforeend', `
<!-- ========== DETAIL OVERLAY ========== -->
<div id="detailOverlay" class="detail-overlay">
    <!-- Header -->
    <div class="p-5 border-b border-white/5">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <button class="back-btn" onclick="closeDetail()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    返回总览
                </button>
                <div>
                    <div id="detailBreadcrumb" class="text-xs text-gray-500 mb-1">DEEP DIVE · INVENTORY TURNOVER EFFICIENCY</div>
                    <div class="flex items-center gap-3">
                        <h2 id="detailTitle" class="text-2xl font-bold text-white">库存周转大盘</h2>
                        <span id="detailWeightTag" class="tag tag-green">权重 25%</span>
                    </div>
                </div>
            </div>
            <div class="text-right">
                <div class="flex items-baseline gap-1">
                    <span id="detailScore" class="text-4xl font-bold mono" style="color:var(--optimal)">85</span>
                    <span id="detailMax" class="text-lg text-gray-500 mono">/100</span>
                </div>
                <div id="detailTrend" class="text-sm" style="color:var(--optimal)">↗ +2.1 较上月</div>
            </div>
        </div>
        <!-- Score Formula -->
        <div id="detailFormula" class="mt-3 text-xs text-gray-500 font-mono">
            Score = 50 × min(2, 周转率/年基准) + 50 × (1 - 周转天数/180)
        </div>
    </div>

    <!-- KPI Cards Row -->
    <div id="kpiRow" class="grid grid-cols-6 gap-3 p-5 border-b border-white/5"></div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-12 gap-4 p-5">
        <!-- Left: Trend Chart -->
        <div class="col-span-6">
            <div class="glass p-5 h-full">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-white">28 日得分趋势</h3>
                    <span class="text-xs text-gray-500">DAILY SCORE · 0-100</span>
                </div>
                <div class="h-56">
                    <svg id="trendChart" viewBox="0 0 500 160" class="w-full h-full">
                        <!-- Grid lines -->
                        <line class="grid-line" x1="0" y1="40" x2="500" y2="40"/>
                        <line class="grid-line" x1="0" y1="80" x2="500" y2="80"/>
                        <line class="grid-line" x1="0" y1="120" x2="500" y2="120"/>
                        <defs>
                            <linearGradient id="detailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#c8f560;stop-opacity:0.3"/>
                                <stop offset="100%" style="stop-color:#c8f560;stop-opacity:0"/>
                            </linearGradient>
                        </defs>
                        <!-- Area -->
                        <path id="chartArea" fill="url(#detailGrad)" d="M0,120 Q60,100 120,85 T240,70 T360,55 T500,50 L500,160 L0,160 Z"/>
                        <!-- Line -->
                        <path id="chartLine" fill="none" stroke="#c8f560" stroke-width="2.5" d="M0,120 Q60,100 120,85 T240,70 T360,55 T500,50"/>
                        <!-- Data Points -->
                        <circle cx="0" cy="120" r="3" fill="#c8f560"/>
                        <circle cx="60" cy="105" r="3" fill="#c8f560"/>
                        <circle cx="120" cy="88" r="3" fill="#c8f560"/>
                        <circle cx="180" cy="75" r="3" fill="#c8f560"/>
                        <circle cx="240" cy="72" r="3" fill="#c8f560"/>
                        <circle cx="300" cy="62" r="3" fill="#c8f560"/>
                        <circle cx="360" cy="55" r="3" fill="#c8f560"/>
                        <circle cx="420" cy="52" r="3" fill="#c8f560"/>
                        <circle cx="500" cy="50" r="4" fill="#c8f560"/>
                        <!-- Labels -->
                        <text x="0" y="150" fill="#52525b" font-size="9" font-family="JetBrains Mono">78</text>
                        <text x="60" y="150" fill="#52525b" font-size="9" font-family="JetBrains Mono">80</text>
                        <text x="120" y="150" fill="#52525b" font-size="9" font-family="JetBrains Mono">82</text>
                        <text x="180" y="150" fill="#52525b" font-size="9" font-family="JetBrains Mono">84</text>
                        <text x="240" y="150" fill="#52525b" font-size="9" font-family="JetBrains Mono">85</text>
                        <text x="480" y="40" fill="#c8f560" font-size="10" font-weight="bold" font-family="JetBrains Mono">85</text>
                    </svg>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mt-2 mono">
                    <span>05-01</span><span>05-05</span><span>05-10</span><span>05-15</span><span>05-20</span><span>05-25</span><span>05-28</span>
                </div>
            </div>
        </div>
        
        <!-- Right: Dimension-specific Chart -->
        <div class="col-span-6">
            <div class="glass p-5 h-full">
                <h3 id="rightChartTitle" class="text-sm font-medium text-white mb-4">分品牌 · 周转效率得分</h3>
                <div id="rightChartContent" class="space-y-3"></div>
            </div>
        </div>
    </div>

    <!-- Bottom Grid -->
    <div class="grid grid-cols-12 gap-4 p-5 pt-0">
        <!-- Left: SKU Table -->
        <div class="col-span-7">
            <div class="glass p-5">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h3 class="text-sm font-medium text-white">Top 风险 SKU 穿透</h3>
                        <span id="skuCount" class="text-xs text-gray-500">5 ITEMS</span>
                    </div>
                    <div id="tableActions" class="flex items-center gap-2"></div>
                </div>
                <table class="data-table">
                    <thead id="detailThead"></thead>
                    <tbody id="detailTbody"></tbody>
                </table>
            </div>
        </div>
        
        <!-- Right: AI Decision -->
        <div class="col-span-5">
            <div class="glass p-5 h-full">
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-lg">🤖</span>
                    <h3 class="text-sm font-medium text-white">AI 数据解读</h3>
                </div>
                <div id="aiDecisions" class="space-y-3"></div>
            </div>
        </div>
    </div>
</div>
    `);
}

// 注入 HTML
injectDetailOverlay();

// ========== DIMENSION DETAIL DATA ==========
const detailData = {
    turnover: {
        label: '库存周转大盘', score: '85', max: '/100', trend: '↗ +2.1', trendColor: 'var(--optimal)',
        weight: '25%', color: 'var(--optimal)',
        breadcrumb: 'DEEP DIVE · INVENTORY TURNOVER EFFICIENCY',
        formula: 'Score = 50 × min(2, 周转率/年基准) + 50 × (1 - 周转天数/180)',
        kpis: [
            { name: '库存周转率', value: '2.1', unit: '次/年', change: '+0.18', status: 'green' },
            { name: '平均周转天数', value: '63', unit: 'd', change: '-5d', status: 'green' },
            { name: '周转资金占用', value: '¥48.6M', unit: '', change: '-3.2%', status: 'green' },
            { name: '动销 SKU 占比', value: '82', unit: '%', change: '+1.6pp', status: 'green' },
            { name: '慢周转 SKU', value: '1,247', unit: '', change: '-126', status: 'yellow' },
            { name: 'GMROI', value: '3.42', unit: '', change: '+0.21', status: 'green' }
        ],
        rightTitle: '分品牌 · 周转效率得分',
        rightItems: [
            { name: 'Nortiv8', detail: '2.6 次/年 · 56d', score: 91, status: 'green' },
            { name: 'Bruno Marc', detail: '2.3 次/年 · 60d', score: 87, status: 'green' },
            { name: 'Dream Pairs Comfort', detail: '2.1 次/年 · 64d', score: 83, status: 'green' },
            { name: 'Sneakers', detail: '1.9 次/年 · 71d', score: 79, status: 'yellow' },
            { name: 'Dream Pairs Kids', detail: '1.7 次/年 · 78d', score: 74, status: 'yellow' },
            { name: 'Dream Pairs Fashion', detail: '1.4 次/年 · 92d', score: 68, status: 'red' }
        ],
        thead: ['SKU', '品牌', '仓库', '关键指标', '库存', '货值', '建议'],
        rows: [
            ['SDFN2379W-BLK-09', 'DP Fashion', '海外自有仓', '周转 198d', '612', '¥48,960', '清仓'],
            ['BMSL4821W-TAN-10', 'Bruno Marc', '海外平台仓', '周转 176d', '380', '¥30,400', '清仓'],
            ['SDKB2487W-CAMO-08', 'DP Fashion', '国内自有仓', '周转 162d', '1,840', '¥147,200', '促销']
        ],
        actions: [],
                ai: [
            { id: 'TR-01', priority: '高关注', title: '周转效率深度分析', desc: '户外靴品类周转天数 63 天，优于行业均值 78 天，主要得益于 Nortiv8 品牌爆款带动', benefit: '预计 Q3 可压缩至 58 天，释放资金 ¥860k' }
        ]
    },
    shortage: {
        label: '缺货风控大盘', score: '78', max: '/100', trend: '↘ -1.4', trendColor: 'var(--critical)',
        weight: '30%', color: 'var(--critical)',
        breadcrumb: 'DEEP DIVE · STOCK-OUT RISK',
        formula: 'Score = 60 × 订单满足率 + 40 × min(1, WOS/4)',
        kpis: [
            { name: '可售周数 WOS', value: '4.2', unit: '周', change: '-0.3', status: 'yellow' },
            { name: '缺货率', value: '2.1', unit: '%', change: '+0.4pp', status: 'yellow' },
            { name: '订单满足率', value: '97.9', unit: '%', change: '-0.4pp', status: 'yellow' },
            { name: 'WOS<1 高危 SKU', value: '37', unit: '', change: '+8', status: 'red' },
            { name: '在途订单', value: '186', unit: '', change: '+24', status: 'green' },
            { name: '潜在断货损失', value: '¥1.24M', unit: '', change: '+18%', status: 'red' }
        ],
        rightTitle: '分仓库 · 缺货风险得分',
        rightItems: [
            { name: '海外平台仓', detail: 'WOS 2.4 · 缺货率 4.2%', score: 68, status: 'red' },
            { name: '海外自有仓', detail: 'WOS 3.6 · 缺货率 2.8%', score: 76, status: 'yellow' },
            { name: '海外三方仓', detail: 'WOS 4.1 · 缺货率 1.9%', score: 80, status: 'yellow' },
            { name: '海外三方仓', detail: 'WOS 4.8 · 缺货率 1.2%', score: 84, status: 'green' },
            { name: '国内自有仓', detail: 'WOS 5.4 · 缺货率 0.6%', score: 88, status: 'green' }
        ],
        thead: ['SKU', '品牌', '仓库', 'WOS', '库存', '预估损失', '建议'],
        rows: [
            ['39044-MNX-7A-BRN-06', 'Bruno Marc', '海外平台仓', 'WOS 0.6', '38', '¥3,040', '紧急空运'],
            ['38551-BLVD-11P-KHK-06', 'Nortiv8', '海外平台仓', 'WOS 0.8', '56', '¥4,480', '紧急空运'],
            ['SNKS248W-WHT-08', 'Sneakers', '海外自有仓', 'WOS 1.0', '72', '¥5,760', '调拨']
        ],
        actions: [],
                ai: [
            { id: 'SO-01', priority: '高风险', title: '缺货风险预警分析', desc: '海外平台仓 6 个 SKU 可售周数 <1.0，主要因海运延误导致补货不及时，建议切换至空运', benefit: '若 48h 内补货到位，可避免断货损失 ¥420k' }
        ]
    },
    overstock: {
        label: '积压风控大盘', score: '76', max: '/100', trend: '↗ +0.8', trendColor: 'var(--warning)',
        weight: '30%', color: 'var(--warning)',
        breadcrumb: 'DEEP DIVE · OVERSTOCK & AGING RISK',
        formula: 'Score = 60 × (1 - 滞销占比) + 40 × max(0, 1 - 存销比/6)',
        kpis: [
            { name: '滞销占比', value: '8.3', unit: '%', change: '-0.6pp', status: 'green' },
            { name: '存销比', value: '3.8', unit: '', change: '+0.2', status: 'yellow' },
            { name: '>360D 库龄 SKU', value: '8,157', unit: '', change: '+96', status: 'red' },
            { name: '占用资金', value: '¥18.4M', unit: '', change: '-2.1%', status: 'green' },
            { name: '跌价计提', value: '¥2.86M', unit: '', change: '+8%', status: 'red' },
            { name: '本月清仓 SKU', value: '412', unit: '', change: '+78', status: 'green' }
        ],
        rightTitle: '库龄段 · 积压风险分布',
        rightItems: [
            { name: '0-90天', detail: '78,851 SKU · ¥42.6M', score: 95, status: 'green' },
            { name: '90-180天', detail: '32,628 SKU · ¥18.2M', score: 78, status: 'yellow' },
            { name: '180-360天', detail: '16,314 SKU · ¥9.4M', score: 62, status: 'yellow' },
            { name: '>360天', detail: '8,157 SKU · ¥4.8M', score: 38, status: 'red' }
        ],
        thead: ['SKU', '品牌', '仓库', '库龄', '库存', '货值', '建议'],
        rows: [
            ['121717-K-ALLBLACK-005', 'DP Kids', '海外自有仓', '402d', '720', '¥86,400', '立即核销'],
            ['43590-160472-K-RED-06', 'DP Kids', '国内自有仓', '365d', '380', '¥45,600', '清仓'],
            ['SDKB2487W-CAMO-08', 'DP Fashion', '海外平台仓', '312d', '1,840', '¥147,200', '降价促销']
        ],
        actions: [],
                ai: [
            { id: 'OS-01', priority: '高关注', title: '积压库存结构分析', desc: '>360 天库龄 SKU 共 412 个，主要集中在 DP Fashion 高跟鞋品类，残值率已降至 35%', benefit: '建议立即核销，可释放资金 ¥1.86M + 空出 2,840 货位' },
            { id: 'OS-02', priority: '中关注', title: '滞销品类趋势解读', desc: '180-360 天库龄占比 8.3%，环比上升 0.4pp，主要因夏季凉鞋换季延迟', benefit: '通过 TikTok 闪购可回笼现金 ¥2.4M，滞销占比预计 -1.2pp' }
        ]
    },
    structure: {
        label: '库存结构大盘', score: '88', max: '/100', trend: '↗ +1.2', trendColor: 'var(--optimal)',
        weight: '15%', color: 'var(--optimal)',
        breadcrumb: 'DEEP DIVE · PORTFOLIO STRUCTURE HEALTH',
        formula: 'Score = 50 × 动销率 + 30 × 安全库存覆盖率 + 20 × (1 - ABC 偏移度)',
        kpis: [
            { name: '动销率', value: '82', unit: '%', change: '+1.6pp', status: 'green' },
            { name: '安全库存覆盖', value: '96', unit: '%', change: '+0.4pp', status: 'green' },
            { name: 'ABC 结构偏移', value: '8', unit: '%', change: '-1pp', status: 'green' },
            { name: '新品占比', value: '12.4', unit: '%', change: '+0.8pp', status: 'green' },
            { name: '长尾 SKU 占比', value: '23', unit: '%', change: '-1.2pp', status: 'yellow' },
            { name: '断码率', value: '4.6', unit: '%', change: '-0.3pp', status: 'green' }
        ],
        rightTitle: 'ABC 分级 · 结构占比',
        rightItems: [
            { name: 'A类 · 核心', detail: '1,820 SKU · 70% 销售', score: 94, status: 'green' },
            { name: 'B类 · 主力', detail: '12,540 SKU · 22% 销售', score: 88, status: 'green' },
            { name: 'C类 · 长尾', detail: '34,610 SKU · 7% 销售', score: 76, status: 'yellow' },
            { name: 'D类 · 沉睡', detail: '101,043 SKU · 1% 销售', score: 52, status: 'red' }
        ],
        thead: ['SKU', '品牌', '仓库', '关键指标', '库存', '货值', '建议'],
        rows: [
            ['SDFG-L-45W-NEW-06', 'DP Fashion', '海外平台仓', '结构偏移 12%', '280', '¥22,400', '重定ABC'],
            ['BM-CLASSIC-LOAFER-09', 'Bruno Marc', '海外三方仓', '断码率 14%', '156', '¥12,480', '紧急补码'],
            ['SNK-ATR-LITE-WHT-08', 'Sneakers', '海外自有仓', '新品未达预期', '420', '¥33,600', '调价测款']
        ],
        actions: [],
                ai: [
            { id: 'ST-01', priority: '常规', title: 'SKU 结构健康度评估', desc: 'D 类沉睡 SKU 占比 12.4%，连续 90 天零动销，占用仓储资源但无产出', benefit: '批量下架可释放 4,200 货位，减少管理成本 ¥8k/月' },
            { id: 'ST-02', priority: '中关注', title: '品类结构优化建议', desc: 'C 类 SKU 动销率 68%，低于 B 类 15pp，存在向 B 类转化潜力', benefit: '提升备货优先级后，预计整体动销率 +0.8pp' }
        ]
    }
};

// ========== DIMENSION DETAIL FUNCTIONS ==========
function openDetail(dim) {
    const d = detailData[dim];
    
    // Header
    document.getElementById('detailBreadcrumb').textContent = d.breadcrumb;
    document.getElementById('detailTitle').textContent = d.label;
    document.getElementById('detailWeightTag').textContent = '权重 ' + d.weight;
    document.getElementById('detailWeightTag').className = 'tag tag-' + d.status + ' font-mono';
    document.getElementById('detailScore').textContent = d.score;
    document.getElementById('detailScore').style.color = d.color;
    document.getElementById('detailTrend').textContent = d.trend + ' 较上月';
    document.getElementById('detailTrend').style.color = d.trendColor;
    document.getElementById('detailFormula').textContent = d.formula;
    
    // KPI Cards
    const statusColors = { green: 'var(--optimal)', yellow: 'var(--warning)', red: 'var(--critical)' };
    document.getElementById('kpiRow').innerHTML = d.kpis.map(k => `
        <div class="glass p-3">
            <div class="text-xs text-gray-500 mb-1">${k.name}</div>
            <div class="flex items-baseline gap-1 mb-1">
                <span class="text-xl font-bold mono" style="color:${statusColors[k.status]}">${k.value}</span>
                <span class="text-xs text-gray-500">${k.unit}</span>
            </div>
            <div class="text-xs" style="color:${statusColors[k.status]}">${k.change}</div>
        </div>
    `).join('');
    
    // Right Chart
    document.getElementById('rightChartTitle').textContent = d.rightTitle;
    document.getElementById('rightChartContent').innerHTML = d.rightItems.map(item => `
        <div class="flex items-center gap-3">
            <div class="w-32 text-xs text-gray-300">${item.name}</div>
            <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs text-gray-500">${item.detail}</span>
                    <span class="text-sm font-bold mono" style="color:${statusColors[item.status]}">${item.score}</span>
                </div>
                <div class="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div class="h-full rounded-full" style="width:${item.score}%;background:${statusColors[item.status]};box-shadow:0 0 6px ${statusColors[item.status]}"></div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Table
    document.getElementById('skuCount').textContent = d.rows.length + ' ITEMS';
    document.getElementById('detailThead').innerHTML = '<tr>' + d.thead.map(h => `<th>${h}</th>`).join('') + '</tr>';
    document.getElementById('detailTbody').innerHTML = d.rows.map(r => `
        <tr>
            ${r.map((c, i) => {
                if (i === 0) return `<td class="mono text-white text-xs cursor-pointer hover:text-green-400 transition-colors" onclick="openSkuDetail('${c}')">${c}</td>`;
                if (i === 3) {
                    const status = c.includes('WOS 0') || c.includes('周转 1') || c.includes('库龄 4') || c.includes('偏移 1') ? 'red' : 
                                   c.includes('WOS 1') || c.includes('周转 1') || c.includes('库龄 3') || c.includes('断码') ? 'yellow' : 'green';
                    return `<td><span class="tag tag-${status} text-[10px]">${c}</span></td>`;
                }
                if (i === r.length - 1) {
                    const btnClass = c.includes('空运') || c.includes('核销') ? 'btn-red' : 
                                     c.includes('清仓') || c.includes('促销') || c.includes('调拨') ? 'btn-yellow' : 'btn-ghost';
                    return `<td><button class="btn ${btnClass} text-[10px]">${c}</button></td>`;
                }
                return `<td class="text-xs text-gray-300">${c}</td>`;
            }).join('')}
        </tr>
    `).join('');
    
    // AI Decisions
    document.getElementById('aiDecisions').innerHTML = d.ai.map(a => {
        // 根据报告 ID 确定链接目标
        let reportFile = 'ai-report-sample.html';
        if (a.id && a.id.startsWith('TR')) {
            reportFile = 'ai-report-turnover.html';
        } else if (a.id && a.id.startsWith('OS')) {
            reportFile = 'ai-report-overstock.html';
        }
        return `
        <a href="${reportFile}" target="_blank" class="block p-3 rounded-lg ${a.status === 'red' ? 'bg-red-500/10 border border-red-500/20' : a.status === 'yellow' ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-white/5 border border-white/5'} cursor-pointer hover:bg-white/10 transition-colors no-underline">
            <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-mono text-gray-400">${a.id}</span>
                <span class="tag ${a.status === 'red' ? 'tag-red' : a.status === 'yellow' ? 'tag-yellow' : 'tag-blue'} text-[10px]">${a.priority}</span>
            </div>
            <div class="text-sm font-medium text-white mb-1">${a.title}</div>
            <div class="text-xs text-gray-400 mb-2">${a.desc}</div>
            <div class="text-xs" style="color:${a.status === 'red' ? 'var(--critical)' : a.status === 'yellow' ? 'var(--warning)' : 'var(--optimal)'}">${a.benefit}</div>
            <div class="mt-2 text-[10px] text-blue-400 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                查看详细分析报告
            </div>
        </a>
    `}).join('');
    
    document.getElementById('detailOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    document.getElementById('detailOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// 自动注入 overlay HTML
injectDetailOverlay();

