// overlay-brand.js - 品牌详情弹窗模块
// Creator: Zero skill

function injectBrandOverlay() {
    document.body.insertAdjacentHTML('beforeend', `
<!-- ========== BRAND DETAIL OVERLAY ========== -->
<div id="brandOverlay" class="detail-overlay">
    <!-- Header -->
    <div class="p-4 border-b border-white/5">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <button class="back-btn" onclick="closeBrandDetail()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    返回总览
                </button>
                <div>
                    <div id="brandBreadcrumb" class="text-xs text-gray-500">BRAND DEEP DIVE · INVENTORY HEALTH</div>
                    <div class="flex items-center gap-3">
                        <h2 id="brandTitle" class="text-xl font-bold text-white">Nortiv8</h2>
                        <span id="brandStatusTag" class="tag tag-green">OPTIMAL</span>
                    </div>
                </div>
            </div>
            <div class="text-right">
                <div class="flex items-baseline gap-1">
                    <span id="brandScore" class="text-3xl font-bold mono" style="color:var(--optimal)">87</span>
                    <span id="brandMax" class="text-lg text-gray-500 mono">/100</span>
                </div>
                <div id="brandTrend" class="text-sm" style="color:var(--optimal)">↗ +4.1 较上周</div>
            </div>
        </div>
    </div>

    <!-- KPI Cards Row -->
    <div id="brandKpiRow" class="grid grid-cols-5 gap-3 p-4 border-b border-white/5"></div>

    <!-- Row 2: Dimension/Trend + Category IHI -->
    <div class="grid grid-cols-12 gap-4 p-4">
        <!-- Left: Dimension Scores + 7-Day Trend -->
        <div class="col-span-5">
            <div class="glass p-4 h-full flex flex-col">
                <div class="flex gap-4 flex-1">
                    <!-- Left: Dimension Sub-scores -->
                    <div class="w-32 flex flex-col">
                        <h3 class="text-xs font-medium text-white mb-2">维度评分</h3>
                        <div class="grid grid-cols-1 gap-2 flex-1">
                            <div class="p-2 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[9px] text-gray-400">周转效率</span>
                                    <span class="text-[8px]" style="color:var(--optimal)">↗+1.2</span>
                                </div>
                                <div class="flex items-baseline gap-0.5">
                                    <span id="dimTurnover" class="text-base font-bold mono" style="color:var(--optimal)">21.3</span>
                                    <span class="text-[7px] text-gray-500 mono">/25</span>
                                </div>
                                <div class="h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                                    <div class="h-full rounded-full" style="width:85%;background:var(--optimal)"></div>
                                </div>
                            </div>
                            <div class="p-2 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[9px] text-gray-400">缺货风险</span>
                                    <span class="text-[8px]" style="color:var(--warning)">↘-0.6</span>
                                </div>
                                <div class="flex items-baseline gap-0.5">
                                    <span id="dimShortage" class="text-base font-bold mono" style="color:var(--warning)">23.4</span>
                                    <span class="text-[7px] text-gray-500 mono">/30</span>
                                </div>
                                <div class="h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                                    <div class="h-full rounded-full" style="width:78%;background:var(--warning)"></div>
                                </div>
                            </div>
                            <div class="p-2 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[9px] text-gray-400">积压风险</span>
                                    <span class="text-[8px]" style="color:var(--warning)">↘-0.4</span>
                                </div>
                                <div class="flex items-baseline gap-0.5">
                                    <span id="dimOverstock" class="text-base font-bold mono" style="color:var(--warning)">22.8</span>
                                    <span class="text-[7px] text-gray-500 mono">/30</span>
                                </div>
                                <div class="h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                                    <div class="h-full rounded-full" style="width:76%;background:var(--warning)"></div>
                                </div>
                            </div>
                            <div class="p-2 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[9px] text-gray-400">结构健康</span>
                                    <span class="text-[8px]" style="color:var(--optimal)">↗+0.8</span>
                                </div>
                                <div class="flex items-baseline gap-0.5">
                                    <span id="dimStructure" class="text-base font-bold mono" style="color:var(--optimal)">13.2</span>
                                    <span class="text-[7px] text-gray-500 mono">/15</span>
                                </div>
                                <div class="h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                                    <div class="h-full rounded-full" style="width:88%;background:var(--optimal)"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Right: 7-Day Trend -->
                    <div class="flex-1 flex flex-col">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xs font-medium text-white">7日 IHI 趋势</h3>
                            <span id="brandTrendChartLabel" class="text-[10px] text-gray-500">7-DAY TREND</span>
                        </div>
                        <div id="brandTrendChart" class="flex-1"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Right: Category IHI Grid (4x3) -->
        <div class="col-span-7">
            <div class="glass p-4 h-full">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="text-sm font-medium text-white">品类 IHI 得分</h3>
                    <span class="text-xs text-gray-500">CATEGORY IHI · 点击查看详情</span>
                </div>
                <div id="brandCategoryIhiGrid" class="grid grid-cols-4 gap-2"></div>
            </div>
        </div>
    </div>

    <!-- Row 3: Warehouse + Category Breakdown + AI Decisions -->
    <div class="grid grid-cols-12 gap-4 p-4 pt-0">
        <!-- Left: Warehouse Distribution -->
        <div class="col-span-4">
            <div class="glass p-4 h-full">
                <h3 class="text-sm font-medium text-white mb-3">仓库分布</h3>
                <div id="brandWarehouseContent" class="space-y-2"></div>
            </div>
        </div>

        <!-- Center: Category Breakdown -->
        <div class="col-span-4">
            <div class="glass p-4 h-full">
                <h3 class="text-sm font-medium text-white mb-3">库龄分布</h3>
                <div id="brandCategoryContent" class="space-y-2"></div>
            </div>
        </div>

        <!-- Right: AI Decisions -->
        <div class="col-span-4">
            <div class="glass p-4 h-full">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4" style="color:var(--optimal)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        <h3 class="text-sm font-medium text-white">AI 数据解读</h3>
                    </div>
                    <span id="brandAiCount" class="text-xs text-gray-500"></span>
                </div>
                <div id="brandAiDecisions" class="space-y-2 overflow-y-auto max-h-64"></div>
            </div>
        </div>
    </div>
</div>
    `);
}

// 注入 HTML
injectBrandOverlay();

// ========== BRAND DETAIL DATA ==========
const brandData = {
    nortiv8: {
        name: 'Nortiv8', score: 87, status: 'green', trend: '+4.1',
        breadcrumb: 'BRAND DEEP DIVE · NORTIV8',
        kpis: [
            { name: 'SKU 总数', value: '28,640', unit: '', change: '+126', status: 'green' },
            { name: 'IHI 评分', value: '87', unit: '/100', change: '+4.1', status: 'green' },
            { name: 'WOS', value: '4.8', unit: '周', change: '+0.6', status: 'green' },
            { name: '动销率', value: '86', unit: '%', change: '+2.1pp', status: 'green' },
            { name: '滞销占比', value: '4.2', unit: '%', change: '-0.8pp', status: 'green' }
        ],
        trendData: [78, 80, 82, 81, 84, 85, 87],
        warehouses: [
            { name: '海外平台仓', stock: '12,400', wos: '5.2', status: 'green' },
            { name: '海外自有仓', stock: '8,200', wos: '4.6', status: 'green' },
            { name: '海外三方仓', stock: '5,400', wos: '4.8', status: 'green' },
            { name: '国内自有仓', stock: '2,640', wos: '4.2', status: 'yellow' }
        ],
        categories: [
            { name: '0-90天', pct: 68, status: 'green' },
            { name: '90-180天', pct: 18, status: 'green' },
            { name: '180-360天', pct: 10, status: 'yellow' },
            { name: '360天+', pct: 4, status: 'yellow' }
        ],
        thead: ['SKU', '仓库', 'WOS', '库龄', '库存', '风险等级', '建议'],
        rows: [
            ['N8-OUTDOOR-BLK-10', '海外平台仓', 'WOS 1.2', '48d', '640', 'red', '紧急补货'],
            ['N8-WORK-BRN-9', '海外自有仓', 'WOS 2.8', '86d', '1,240', 'yellow', '调拨'],
            ['N8-CASUAL-TAN-11', '海外三方仓', 'WOS 3.4', '62d', '860', 'green', '保持'],
            ['N8-OUTDOOR-WHT-8', '国内自有仓', 'WOS 4.8', '52d', '420', 'green', '保持']
        ],
        ai: [
            { type: '异常检测', sku: 'N8-OUTDOOR-BLK-10', trigger: 'WOS 1.2 · 低于安全线 2.0', desc: '户外靴 BLK-10 近 7 日销量环比增长 45%，但补货在途延迟 5 天', benefit: '数据洞察：爆款 SKU 需求激增，建议调整补货周期至 21 天', action: '分析', status: 'red' },
            { type: '库存平衡', sku: 'N8-WORK-BRN-9', trigger: '仓库分布不均 · 海外自有仓偏高', desc: '工装鞋 BRN-9 海外自有仓库存占比 62%，而海外平台仓仅 18%', benefit: '数据洞察：区域需求错配，调拨后可提升订单满足率 8%', action: '分析', status: 'yellow' },
            { type: '趋势预警', sku: 'N8-CASUAL-TAN-11', trigger: '库龄 86d · 周转放缓', desc: '休闲鞋 TAN-11 近 30 天动销率下降 12%，竞品同期降价 20%', benefit: '数据洞察：价格竞争力下降，建议监控竞品动态', action: '分析', status: 'yellow' },
            { type: '健康监控', sku: 'N8-HIKING-GRY-8', trigger: 'WOS 5.2 · 库存健康', desc: '登山鞋 GRY-8 各项指标处于最优区间，周转率品类 TOP3', benefit: '数据洞察：可作为同品类补货策略标杆', action: '分析', status: 'green' },
            { type: '滞销预警', sku: 'N8-SANDAL-WHT-9', trigger: '库龄 142d · 接近警戒线', desc: '凉鞋 WHT-9 季节性品类过季，Q2 动销率仅 8%', benefit: '数据洞察：季节性 SKU 需提前 60 天规划清仓', action: '分析', status: 'red' }
        ],
        categoryIhi: [
            { name: '户外靴', score: 91, trend: '↗+3.2', status: 'green', trendDir: 'up' },
            { name: '工装鞋', score: 88, trend: '↗+2.8', status: 'green', trendDir: 'up' },
            { name: '休闲鞋', score: 82, trend: '↗+1.4', status: 'green', trendDir: 'up' },
            { name: '凉鞋', score: 76, trend: '↘-0.8', status: 'yellow', trendDir: 'down' },
            { name: '靴子', score: 84, trend: '↗+2.0', status: 'green', trendDir: 'up' },
            { name: '配件', score: 79, trend: '↗+0.6', status: 'yellow', trendDir: 'up' },
            { name: '登山鞋', score: 86, trend: '↗+1.8', status: 'green', trendDir: 'up' },
            { name: '溯溪鞋', score: 74, trend: '↘-1.2', status: 'yellow', trendDir: 'down' },
            { name: '雪地靴', score: 81, trend: '↗+0.9', status: 'green', trendDir: 'up' },
            { name: '拖鞋', score: 77, trend: '↗+0.4', status: 'yellow', trendDir: 'up' },
            { name: '运动凉鞋', score: 72, trend: '↘-1.6', status: 'yellow', trendDir: 'down' },
            { name: '童鞋', score: 83, trend: '↗+1.2', status: 'green', trendDir: 'up' },
            { name: '军靴', score: 89, trend: '↗+2.5', status: 'green', trendDir: 'up' },
            { name: '钓鱼鞋', score: 78, trend: '↗+0.3', status: 'yellow', trendDir: 'up' },
            { name: '狩猎靴', score: 85, trend: '↗+1.5', status: 'green', trendDir: 'up' },
            { name: '工装配饰', score: 73, trend: '↘-0.5', status: 'yellow', trendDir: 'down' }
        ]
    },
    brunomarc: {
        name: 'Bruno Marc', score: 84, status: 'green', trend: '+2.6',
        breadcrumb: 'BRAND DEEP DIVE · BRUNO MARC',
        kpis: [
            { name: 'SKU 总数', value: '41,280', unit: '', change: '+89', status: 'green' },
            { name: 'IHI 评分', value: '84', unit: '/100', change: '+2.6', status: 'green' },
            { name: 'WOS', value: '4.4', unit: '周', change: '+0.4', status: 'green' },
            { name: '动销率', value: '84', unit: '%', change: '+1.8pp', status: 'green' },
            { name: '滞销占比', value: '5.1', unit: '%', change: '-0.4pp', status: 'yellow' }
        ],
        trendData: [76, 78, 79, 80, 81, 82, 84],
        warehouses: [
            { name: '海外平台仓', stock: '18,600', wos: '4.2', status: 'green' },
            { name: '海外三方仓', stock: '12,400', wos: '4.6', status: 'green' },
            { name: '海外自有仓', stock: '6,800', wos: '4.0', status: 'yellow' },
            { name: '国内自有仓', stock: '3,480', wos: '5.2', status: 'green' }
        ],
        categories: [
            { name: '0-90天', pct: 62, status: 'green' },
            { name: '90-180天', pct: 20, status: 'green' },
            { name: '180-360天', pct: 12, status: 'yellow' },
            { name: '360天+', pct: 6, status: 'yellow' }
        ],
        thead: ['SKU', '仓库', 'WOS', '库龄', '库存', '风险等级', '建议'],
        rows: [
            ['BM-OLLO-POLO-BLK-9', '海外平台仓', 'WOS 0.8', '24d', '120', 'red', '紧急空派'],
            ['BM-CLASSIC-LOAFER-10', '海外三方仓', 'WOS 2.4', '68d', '980', 'yellow', '促销'],
            ['BM-CASUAL-SNV-8', '海外自有仓', 'WOS 4.0', '54d', '1,640', 'green', '保持'],
            ['BM-OXFORD-BRN-11', '国内自有仓', 'WOS 5.2', '42d', '860', 'green', '保持']
        ],
        ai: [
            { type: '需求激增', sku: 'BM-OLLO-POLO-BLK-9', trigger: 'WOS 0.8 · 缺货风险高', desc: '正装皮鞋 BLK-9 近 3 日订单量环比增长 180%，库存告急', benefit: '数据洞察：职场复工季需求爆发，建议增加安全库存至 30 天', action: '分析', status: 'red' },
            { type: '价格分析', sku: 'BM-CLASSIC-LOAFER-10', trigger: '库龄 68d · 价格敏感度上升', desc: '休闲鞋 LOAFER-10 近 14 天转化率下降 15%，价格高于竞品均值 18%', benefit: '数据洞察：价格弹性区间 10-20%，建议测试降价', action: '分析', status: 'yellow' },
            { type: '库存优化', sku: 'BM-OXFORD-BRN-11', trigger: 'WOS 1.8 · 区域失衡', desc: '牛津鞋 BRN-11 海外自有仓库存占比过高，而需求集中在海外平台仓', benefit: '数据洞察：调拨可缩短履约时效 2.3 天', action: '分析', status: 'yellow' },
            { type: '标杆案例', sku: 'BM-LOAFER-TAN-8', trigger: 'WOS 4.6 · 库存健康', desc: '乐福鞋 TAN-8 周转天数 52 天，缺货率 0%，为品类最优', benefit: '数据洞察：补货模型可作为其他 SKU 参考', action: '分析', status: 'green' }
        ],
        categoryIhi: [
            { name: '正装皮鞋', score: 86, trend: '↗+1.6', status: 'green', trendDir: 'up' },
            { name: '休闲鞋', score: 79, trend: '↗+0.8', status: 'yellow', trendDir: 'up' },
            { name: '运动鞋', score: 74, trend: '↘-1.2', status: 'yellow', trendDir: 'down' },
            { name: '童鞋', score: 81, trend: '↗+2.4', status: 'green', trendDir: 'up' },
            { name: '靴子', score: 77, trend: '↗+0.4', status: 'yellow', trendDir: 'up' },
            { name: '凉鞋', score: 72, trend: '↘-2.0', status: 'yellow', trendDir: 'down' },
            { name: '乐福鞋', score: 84, trend: '↗+1.0', status: 'green', trendDir: 'up' },
            { name: '德比鞋', score: 82, trend: '↗+0.6', status: 'green', trendDir: 'up' },
            { name: '牛津鞋', score: 78, trend: '↘-0.4', status: 'yellow', trendDir: 'down' },
            { name: '帆布鞋', score: 75, trend: '↘-0.8', status: 'yellow', trendDir: 'down' },
            { name: '豆豆鞋', score: 80, trend: '↗+0.5', status: 'green', trendDir: 'up' },
            { name: '驾车鞋', score: 76, trend: '↗+0.2', status: 'yellow', trendDir: 'up' },
            { name: '孟克鞋', score: 83, trend: '↗+0.9', status: 'green', trendDir: 'up' },
            { name: '布洛克', score: 85, trend: '↗+1.2', status: 'green', trendDir: 'up' },
            { name: '切尔西', score: 79, trend: '↗+0.3', status: 'yellow', trendDir: 'up' },
            { name: '马丁靴', score: 77, trend: '↘-0.6', status: 'yellow', trendDir: 'down' }
        ]
    },
    sneakers: {
        name: 'Sneakers', score: 79, status: 'yellow', trend: '+1.4',
        breadcrumb: 'BRAND DEEP DIVE · SNEAKERS',
        kpis: [
            { name: 'SKU 总数', value: '18,950', unit: '', change: '-42', status: 'yellow' },
            { name: 'IHI 评分', value: '79', unit: '/100', change: '+1.4', status: 'yellow' },
            { name: 'WOS', value: '3.8', unit: '周', change: '-0.2', status: 'yellow' },
            { name: '动销率', value: '76', unit: '%', change: '+0.8pp', status: 'yellow' },
            { name: '滞销占比', value: '9.2', unit: '%', change: '-1.2pp', status: 'yellow' }
        ],
        trendData: [74, 75, 76, 77, 76, 78, 79],
        warehouses: [
            { name: '海外平台仓', stock: '8,400', wos: '3.2', status: 'red' },
            { name: '海外三方仓', stock: '5,200', wos: '4.2', status: 'yellow' },
            { name: '海外自有仓', stock: '3,800', wos: '4.0', status: 'yellow' },
            { name: '国内自有仓', stock: '1,550', wos: '4.8', status: 'green' }
        ],
        categories: [
            { name: '0-90天', pct: 58, status: 'yellow' },
            { name: '90-180天', pct: 22, status: 'yellow' },
            { name: '180-360天', pct: 14, status: 'red' },
            { name: '360天+', pct: 6, status: 'red' }
        ],
        thead: ['SKU', '仓库', 'WOS', '库龄', '库存', '风险等级', '建议'],
        rows: [
            ['SNK-RUNNER-BLK-10', '海外平台仓', 'WOS 0.6', '18d', '80', 'red', '紧急补货'],
            ['SNK-BASKET-RED-9', '海外三方仓', 'WOS 2.2', '94d', '1,820', 'yellow', '促销'],
            ['SNK-CANVAS-WHT-8', '海外自有仓', 'WOS 4.0', '62d', '640', 'green', '保持'],
            ['SNK-TRAIN-BLU-11', '国内自有仓', 'WOS 4.8', '48d', '420', 'green', '保持']
        ],
        ai: [
            { type: '爆款预警', sku: 'SNK-RUNNER-BLK-10', trigger: 'WOS 0.6 · 爆款断货风险', desc: '运动跑鞋 BLK-10 连续 7 天销量 TOP1，库存仅够 4 天销售', benefit: '数据洞察：爆款生命周期预计还有 45 天，需紧急补货', action: '分析', status: 'red' },
            { type: '库存积压', sku: 'SNK-BASKET-RED-9', trigger: '库龄 94d · 滞销风险', desc: '篮球鞋 RED-9 近 30 天销量仅 12 件，库存周转天数 312 天', benefit: '数据洞察：品类热度下降，建议转向下沉市场', action: '分析', status: 'red' },
            { type: '竞争分析', sku: 'SNK-SKATE-WHT-8', trigger: '库龄 72d · 竞品冲击', desc: '滑板鞋 WHT-8 主要竞品近 30 天降价 25%，本品转化率下降 22%', benefit: '数据洞察：价格竞争力减弱，需评估跟进策略', action: '分析', status: 'yellow' },
            { type: '需求波动', sku: 'SNK-TRAIN-GRY-11', trigger: 'WOS 0.9 · 健身季需求', desc: '训练鞋 GRY-11 近 7 日销量增长 65%，健身季需求爆发', benefit: '数据洞察：季节性需求窗口期还有 30 天', action: '分析', status: 'red' },
            { type: '稳定品类', sku: 'SNK-CANVAS-NVY-9', trigger: 'WOS 4.2 · 需求稳定', desc: '帆布鞋 NVY-9 近 90 天销量波动 <5%，预测准确率高', benefit: '数据洞察：可作为安全库存模型校准基准', action: '分析', status: 'green' }
        ],
        categoryIhi: [
            { name: '运动跑鞋', score: 76, trend: '↗+1.2', status: 'yellow', trendDir: 'up' },
            { name: '篮球鞋', score: 68, trend: '↘-2.8', status: 'critical', trendDir: 'down' },
            { name: '板鞋', score: 71, trend: '↘-1.4', status: 'yellow', trendDir: 'down' },
            { name: '训练鞋', score: 82, trend: '↗+2.2', status: 'green', trendDir: 'up' },
            { name: '休闲鞋', score: 74, trend: '↗+0.6', status: 'yellow', trendDir: 'up' },
            { name: '凉鞋', score: 65, trend: '↘-3.6', status: 'critical', trendDir: 'down' },
            { name: '足球鞋', score: 73, trend: '↘-0.9', status: 'yellow', trendDir: 'down' },
            { name: '网球鞋', score: 77, trend: '↗+0.3', status: 'yellow', trendDir: 'up' },
            { name: '滑板鞋', score: 69, trend: '↘-2.1', status: 'critical', trendDir: 'down' },
            { name: '登山鞋', score: 80, trend: '↗+1.5', status: 'green', trendDir: 'up' },
            { name: '健步鞋', score: 78, trend: '↗+0.8', status: 'yellow', trendDir: 'up' },
            { name: '童鞋', score: 72, trend: '↘-1.0', status: 'yellow', trendDir: 'down' },
            { name: '越野跑鞋', score: 75, trend: '↗+0.2', status: 'yellow', trendDir: 'up' },
            { name: '复古跑鞋', score: 70, trend: '↘-1.8', status: 'yellow', trendDir: 'down' },
            { name: '马拉松鞋', score: 79, trend: '↗+1.0', status: 'yellow', trendDir: 'up' },
            { name: '老爹鞋', score: 67, trend: '↘-2.5', status: 'critical', trendDir: 'down' }
        ]
    },
    dpkids: {
        name: 'DP Kids', score: 76, status: 'yellow', trend: '-1.8',
        breadcrumb: 'BRAND DEEP DIVE · DREAM PAIRS KIDS',
        kpis: [
            { name: 'SKU 总数', value: '22,310', unit: '', change: '+68', status: 'green' },
            { name: 'IHI 评分', value: '76', unit: '/100', change: '-1.8', status: 'yellow' },
            { name: 'WOS', value: '3.6', unit: '周', change: '-0.4', status: 'yellow' },
            { name: '动销率', value: '72', unit: '%', change: '-0.6pp', status: 'yellow' },
            { name: '滞销占比', value: '10.4', unit: '%', change: '+0.8pp', status: 'red' }
        ],
        trendData: [80, 79, 78, 77, 76, 77, 76],
        warehouses: [
            { name: '海外平台仓', stock: '9,800', wos: '3.0', status: 'red' },
            { name: '海外自有仓', stock: '6,400', wos: '4.2', status: 'yellow' },
            { name: '海外三方仓', stock: '4,200', wos: '3.8', status: 'yellow' },
            { name: '国内自有仓', stock: '1,910', wos: '5.0', status: 'green' }
        ],
        categories: [
            { name: '0-90天', pct: 52, status: 'yellow' },
            { name: '90-180天', pct: 24, status: 'yellow' },
            { name: '180-360天', pct: 16, status: 'red' },
            { name: '360天+', pct: 8, status: 'red' }
        ],
        thead: ['SKU', '仓库', 'WOS', '库龄', '库存', '风险等级', '建议'],
        rows: [
            ['DPK-SPORT-PNK-8', '海外平台仓', 'WOS 0.6', '22d', '60', 'red', '紧急空派'],
            ['DPK-SANDAL-BLU-10', '海外自有仓', 'WOS 1.8', '126d', '2,840', 'red', '清仓促销'],
            ['DPK-BOOT-BRN-9', '海外三方仓', 'WOS 3.8', '72d', '980', 'green', '保持'],
            ['DPK-FIRST-WHT-6', '国内自有仓', 'WOS 5.0', '38d', '420', 'green', '保持']
        ],
        ai: [
            { type: '开学季需求', sku: 'DPK-SPORT-PNK-8', trigger: 'WOS 0.6 · 开学季爆发', desc: '运动鞋 PNK-8 近 3 日销量增长 220%，开学季需求集中释放', benefit: '数据洞察：每年 8 月需求峰值，需提前 45 天备货', action: '分析', status: 'red' },
            { type: '过季预警', sku: 'DPK-SANDAL-BLU-10', trigger: '库龄 126d · 夏季过季', desc: '凉鞋 BLU-10 9 月后销量下降 85%，库存积压风险高', benefit: '数据洞察：季节性 SKU 需在 8 月底前完成清仓', action: '分析', status: 'red' },
            { type: '区域调拨', sku: 'DPK-BOOT-BRN-9', trigger: 'WOS 2.1 · 南北差异', desc: '靴子 BRN-9 北方仓库库存紧张，南方仓库库存充裕', benefit: '数据洞察：南北气候差异导致需求错配，建议调拨', action: '分析', status: 'yellow' },
            { type: '竞品冲击', sku: 'DPK-CANVAS-RED-7', trigger: '库龄 98d · 竞品低价', desc: '帆布鞋 RED-7 竞品同类 SKU 价格低于本品 30%', benefit: '数据洞察：价格敏感度品类，需评估价值定位', action: '分析', status: 'yellow' },
            { type: '稳定增长', sku: 'DPK-FIRST-WHT-6', trigger: 'WOS 5.0 · 刚需品类', desc: '学步鞋 WHT-6 近 90 天销量稳定增长 8%，复购率 35%', benefit: '数据洞察：刚需品类，可适度提升安全库存', action: '分析', status: 'green' }
        ],
        categoryIhi: [
            { name: '运动鞋', score: 78, trend: '↗+0.6', status: 'yellow', trendDir: 'up' },
            { name: '凉鞋', score: 64, trend: '↘-3.4', status: 'critical', trendDir: 'down' },
            { name: '靴子', score: 72, trend: '↘-1.0', status: 'yellow', trendDir: 'down' },
            { name: '学步鞋', score: 86, trend: '↗+3.2', status: 'green', trendDir: 'up' },
            { name: '休闲鞋', score: 75, trend: '↗+0.2', status: 'yellow', trendDir: 'up' },
            { name: '配件', score: 81, trend: '↗+1.8', status: 'green', trendDir: 'up' },
            { name: '帆布鞋', score: 74, trend: '↘-0.5', status: 'yellow', trendDir: 'down' },
            { name: '拖鞋', score: 70, trend: '↘-1.8', status: 'yellow', trendDir: 'down' },
            { name: '雨靴', score: 68, trend: '↘-2.2', status: 'critical', trendDir: 'down' },
            { name: '舞蹈鞋', score: 82, trend: '↗+1.4', status: 'green', trendDir: 'up' },
            { name: '沙滩鞋', score: 66, trend: '↘-2.8', status: 'critical', trendDir: 'down' },
            { name: '雪地靴', score: 73, trend: '↘-0.7', status: 'yellow', trendDir: 'down' },
            { name: '公主鞋', score: 79, trend: '↗+0.8', status: 'yellow', trendDir: 'up' },
            { name: '机能鞋', score: 84, trend: '↗+2.0', status: 'green', trendDir: 'up' },
            { name: '礼仪鞋', score: 71, trend: '↘-1.2', status: 'yellow', trendDir: 'down' },
            { name: '室内鞋', score: 77, trend: '↗+0.4', status: 'yellow', trendDir: 'up' }
        ]
    },
    dpfashion: {
        name: 'DP Fashion', score: 71, status: 'yellow', trend: '-2.4',
        breadcrumb: 'BRAND DEEP DIVE · DREAM PAIRS FASHION',
        kpis: [
            { name: 'SKU 总数', value: '38,833', unit: '', change: '+124', status: 'green' },
            { name: 'IHI 评分', value: '71', unit: '/100', change: '-2.4', status: 'yellow' },
            { name: 'WOS', value: '3.2', unit: '周', change: '-0.6', status: 'red' },
            { name: '动销率', value: '68', unit: '%', change: '-1.2pp', status: 'yellow' },
            { name: '滞销占比', value: '14.6', unit: '%', change: '+1.4pp', status: 'red' }
        ],
        trendData: [78, 76, 74, 73, 72, 71, 71],
        warehouses: [
            { name: '海外平台仓', stock: '16,800', wos: '2.6', status: 'red' },
            { name: '海外自有仓', stock: '10,400', wos: '3.8', status: 'yellow' },
            { name: '海外三方仓', stock: '7,200', wos: '3.4', status: 'red' },
            { name: '国内自有仓', stock: '4,433', wos: '5.6', status: 'green' }
        ],
        categories: [
            { name: '0-90天', pct: 48, status: 'yellow' },
            { name: '90-180天', pct: 22, status: 'yellow' },
            { name: '180-360天', pct: 18, status: 'red' },
            { name: '360天+', pct: 12, status: 'red' }
        ],
        thead: ['SKU', '仓库', 'WOS', '库龄', '库存', '风险等级', '建议'],
        rows: [
            ['DPF-HEEL-BLK-7', '海外平台仓', 'WOS 0.4', '16d', '40', 'red', '紧急空派'],
            ['DPF-BOOT-Camel-8', '海外三方仓', 'WOS 1.4', '168d', '3,240', 'red', '清仓'],
            ['DPF-CASUAL-TAN-9', '海外自有仓', 'WOS 3.8', '86d', '1,680', 'green', '促销'],
            ['DPF-LOAFER-BRN-10', '国内自有仓', 'WOS 5.6', '52d', '640', 'green', '保持']
        ],
        ai: [
            { type: '断货危机', sku: 'DPF-HEEL-BLK-7', trigger: 'WOS 0.4 · 派对季需求', desc: '高跟鞋 BLK-7 近 7 日销量增长 150%，派对季需求爆发', benefit: '数据洞察：社交场景恢复带动需求，需紧急补货', action: '分析', status: 'red' },
            { type: '深度滞销', sku: 'DPF-BOOT-Camel-8', trigger: '库龄 168d · 深度滞销', desc: '靴子 Camel-8 近 90 天销量仅 8 件，库存价值 ¥259k', benefit: '数据洞察：过季+款式老化，建议立即核销止损', action: '分析', status: 'red' },
            { type: '价格测试', sku: 'DPF-FLAT-PNK-9', trigger: '库龄 112d · 价格弹性', desc: '平底鞋 PNK-9 近 30 天转化率 2.1%，低于品类均值 4.5%', benefit: '数据洞察：价格敏感度测试显示 20% 降价可提升转化 80%', action: '分析', status: 'yellow' },
            { type: '款式老化', sku: 'DPF-SANDAL-Gld-10', trigger: '库龄 186d · 款式过时', desc: '凉鞋 Gld-10 为去年爆款，今年竞品已更新 3 代', benefit: '数据洞察：时尚品类生命周期短，需快速清仓', action: '分析', status: 'red' },
            { type: '库存平衡', sku: 'DPF-LOAFER-BRN-10', trigger: 'WOS 1.6 · 区域不均', desc: '穆勒鞋 BRN-10 海外平台仓库存紧张，国内仓充裕', benefit: '数据洞察：跨境调拨可缓解缺货，时效 7 天', action: '分析', status: 'yellow' }
        ],
        categoryIhi: [
            { name: '高跟鞋', score: 62, trend: '↘-4.2', status: 'critical', trendDir: 'down' },
            { name: '靴子', score: 74, trend: '↘-1.0', status: 'yellow', trendDir: 'down' },
            { name: '休闲鞋', score: 68, trend: '↘-2.6', status: 'critical', trendDir: 'down' },
            { name: '拖鞋', score: 71, trend: '↘-1.8', status: 'yellow', trendDir: 'down' },
            { name: '凉鞋', score: 66, trend: '↘-3.0', status: 'critical', trendDir: 'down' },
            { name: '配件', score: 78, trend: '↗+0.4', status: 'yellow', trendDir: 'up' },
            { name: '平底鞋', score: 72, trend: '↘-1.2', status: 'yellow', trendDir: 'down' },
            { name: '坡跟鞋', score: 65, trend: '↘-3.4', status: 'critical', trendDir: 'down' },
            { name: '鱼嘴鞋', score: 69, trend: '↘-2.0', status: 'critical', trendDir: 'down' },
            { name: '尖头鞋', score: 70, trend: '↘-1.5', status: 'yellow', trendDir: 'down' },
            { name: '玛丽珍', score: 75, trend: '↘-0.6', status: 'yellow', trendDir: 'down' },
            { name: '穆勒鞋', score: 67, trend: '↘-2.8', status: 'critical', trendDir: 'down' },
            { name: '乐福鞋', score: 73, trend: '↘-0.9', status: 'yellow', trendDir: 'down' },
            { name: '芭蕾鞋', score: 76, trend: '↗+0.2', status: 'yellow', trendDir: 'up' },
            { name: '绑带鞋', score: 64, trend: '↘-3.2', status: 'critical', trendDir: 'down' },
            { name: '松糕鞋', score: 68, trend: '↘-2.4', status: 'critical', trendDir: 'down' }
        ]
    },
    dpcomfort: {
        name: 'DP Comfort', score: 80, status: 'green', trend: '+1.9',
        breadcrumb: 'BRAND DEEP DIVE · DREAM PAIRS COMFORT',
        kpis: [
            { name: 'SKU 总数', value: '18,000', unit: '', change: '+52', status: 'green' },
            { name: 'IHI 评分', value: '80', unit: '/100', change: '+1.9', status: 'green' },
            { name: 'WOS', value: '4.0', unit: '周', change: '+0.2', status: 'green' },
            { name: '动销率', value: '80', unit: '%', change: '+1.4pp', status: 'green' },
            { name: '滞销占比', value: '6.2', unit: '%', change: '-0.6pp', status: 'yellow' }
        ],
        trendData: [74, 75, 77, 78, 79, 79, 80],
        warehouses: [
            { name: '海外平台仓', stock: '7,800', wos: '3.8', status: 'yellow' },
            { name: '海外三方仓', stock: '4,800', wos: '4.4', status: 'green' },
            { name: '海外自有仓', stock: '3,600', wos: '3.8', status: 'yellow' },
            { name: '国内自有仓', stock: '1,800', wos: '4.6', status: 'green' }
        ],
        categories: [
            { name: '0-90天', pct: 64, status: 'green' },
            { name: '90-180天', pct: 20, status: 'green' },
            { name: '180-360天', pct: 12, status: 'yellow' },
            { name: '360天+', pct: 4, status: 'yellow' }
        ],
        thead: ['SKU', '仓库', 'WOS', '库龄', '库存', '风险等级', '建议'],
        rows: [
            ['DPC-FLAT-BLK-8', '海外平台仓', 'WOS 1.4', '38d', '320', 'yellow', '调拨'],
            ['DPC-LOAFER-TAN-9', '海外三方仓', 'WOS 4.4', '56d', '840', 'green', '保持'],
            ['DPC-SLIPPER-WHT-7', '海外自有仓', 'WOS 3.8', '68d', '640', 'green', '保持'],
            ['DPC-SANDAL-BLU-10', '国内自有仓', 'WOS 4.6', '44d', '420', 'green', '保持']
        ],
        ai: [
            { type: '库存优化', sku: 'DPC-FLAT-BLK-8', trigger: 'WOS 1.4 · 仓库分布', desc: '平底鞋 BLK-8 海外平台仓库存占比 28%，需求占比 45%', benefit: '数据洞察：仓库布局与需求不匹配，调拨可提升满足率', action: '分析', status: 'yellow' },
            { type: '稳定需求', sku: 'DPC-LOAFER-TAN-9', trigger: 'WOS 4.4 · 复购率高', desc: '休闲鞋 TAN-9 近 90 天复购率 42%，客户忠诚度高', benefit: '数据洞察：核心 SKU，可作为引流款维持库存深度', action: '分析', status: 'green' },
            { type: '促销评估', sku: 'DPC-SLIPPER-WHT-7', trigger: '库龄 78d · 促销窗口', desc: '拖鞋 WHT-7 近 30 天销量下降 18%，临近促销季', benefit: '数据洞察：双 11 前降价 10% 可提前锁定销量', action: '分析', status: 'yellow' },
            { type: '需求激增', sku: 'DPC-WALK-GRY-10', trigger: 'WOS 0.8 · 健康趋势', desc: '健步鞋 GRY-10 近 7 日销量增长 90%，健康生活方式带动', benefit: '数据洞察：健康品类增长趋势，建议增加备货', action: '分析', status: 'red' },
            { type: '标杆 SKU', sku: 'DPC-DRIVE-BRN-11', trigger: 'WOS 4.8 · 品类标杆', desc: '驾车鞋 BRN-11 周转天数 48 天，缺货率 0%，评价 4.8 星', benefit: '数据洞察：可作为品类供应链优化标杆', action: '分析', status: 'green' }
        ],
        categoryIhi: [
            { name: '平底鞋', score: 84, trend: '↗+2.4', status: 'green', trendDir: 'up' },
            { name: '凉鞋', score: 76, trend: '↗+1.0', status: 'yellow', trendDir: 'up' },
            { name: '拖鞋', score: 82, trend: '↗+1.8', status: 'green', trendDir: 'up' },
            { name: '护理鞋', score: 88, trend: '↗+3.0', status: 'green', trendDir: 'up' },
            { name: '休闲鞋', score: 79, trend: '↗+0.8', status: 'yellow', trendDir: 'up' },
            { name: '靴子', score: 73, trend: '↘-0.6', status: 'yellow', trendDir: 'down' },
            { name: '健步鞋', score: 85, trend: '↗+2.0', status: 'green', trendDir: 'up' },
            { name: '豆豆鞋', score: 81, trend: '↗+1.2', status: 'green', trendDir: 'up' },
            { name: '乐福鞋', score: 77, trend: '↗+0.5', status: 'yellow', trendDir: 'up' },
            { name: '帆布鞋', score: 74, trend: '↘-0.3', status: 'yellow', trendDir: 'down' },
            { name: '驾车鞋', score: 80, trend: '↗+0.9', status: 'green', trendDir: 'up' },
            { name: '穆勒鞋', score: 75, trend: '↗+0.2', status: 'yellow', trendDir: 'up' },
            { name: '奶奶鞋', score: 83, trend: '↗+1.6', status: 'green', trendDir: 'up' },
            { name: '护士鞋', score: 87, trend: '↗+2.8', status: 'green', trendDir: 'up' },
            { name: '孕妇鞋', score: 86, trend: '↗+2.2', status: 'green', trendDir: 'up' },
            { name: '足弓鞋', score: 84, trend: '↗+1.8', status: 'green', trendDir: 'up' }
        ]
    }
};

// ========== BRAND DETAIL FUNCTIONS ==========
function openBrandDetail(brand) {
    const d = brandData[brand];
    const statusColors = { green: 'var(--optimal)', yellow: 'var(--warning)', red: 'var(--critical)' };
    const statusClass = { green: 'green', yellow: 'yellow', red: 'red' };
    
    // Header
    document.getElementById('brandBreadcrumb').textContent = d.breadcrumb;
    document.getElementById('brandTitle').textContent = d.name;
    document.getElementById('brandStatusTag').textContent = d.status === 'green' ? 'OPTIMAL' : d.status === 'yellow' ? 'WARNING' : 'CRITICAL';
    document.getElementById('brandStatusTag').className = 'tag tag-' + d.status;
    document.getElementById('brandScore').textContent = d.score;
    document.getElementById('brandScore').style.color = statusColors[d.status];
    document.getElementById('brandTrend').textContent = (d.trend.startsWith('+') ? '↗ ' : '↘ ') + d.trend + ' 较上周';
    document.getElementById('brandTrend').style.color = statusColors[d.status];
    
    // KPI Cards
    document.getElementById('brandKpiRow').innerHTML = d.kpis.map(k => `
        <div class="glass p-2">
            <div class="text-[9px] text-gray-500 mb-0.5">${k.name}</div>
            <div class="flex items-baseline gap-0.5">
                <span class="text-lg font-bold mono" style="color:${statusColors[k.status]}">${k.value}</span>
                <span class="text-[8px] text-gray-500">${k.unit}</span>
            </div>
            <div class="text-[8px]" style="color:${statusColors[k.status]}">${k.change}</div>
        </div>
    `).join('');
    
    // Trend Chart
    const minVal = Math.min(...d.trendData);
    const maxVal = Math.max(...d.trendData);
    const range = maxVal - minVal || 1;
    const svgHeight = 120;
    const points = d.trendData.map((v, i) => {
        const x = (i / (d.trendData.length - 1)) * 280;
        const y = svgHeight - ((v - minVal) / range) * 100 - 10;
        return `${x},${y}`;
    }).join(' ');
    const areaPoints = `0,${svgHeight} ${points} 280,${svgHeight}`;
    
    document.getElementById('brandTrendChart').innerHTML = `
        <svg viewBox="0 0 280 ${svgHeight + 20}" class="w-full h-full">
            <defs>
                <linearGradient id="brandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:${statusColors[d.status]};stop-opacity:0.3"/>
                    <stop offset="100%" style="stop-color:${statusColors[d.status]};stop-opacity:0"/>
                </linearGradient>
            </defs>
            <polygon fill="url(#brandGrad)" points="${areaPoints}"/>
            <polyline fill="none" stroke="${statusColors[d.status]}" stroke-width="2" points="${points}"/>
            <circle cx="280" cy="${svgHeight - ((d.trendData[6] - minVal) / range) * 100 - 10}" r="4" fill="${statusColors[d.status]}"/>
            ${d.trendData.map((v, i) => `<text x="${(i / (d.trendData.length - 1)) * 280}" y="${svgHeight + 16}" text-anchor="middle" fill="#52525b" font-size="8" font-family="JetBrains Mono">${['5/15','5/16','5/17','5/18','5/19','5/20','5/21'][i]}</text>`).join('')}
            <text x="265" y="${svgHeight - ((d.trendData[6] - minVal) / range) * 100 - 14}" fill="${statusColors[d.status]}" font-size="10" font-weight="bold" font-family="JetBrains Mono">${d.score}</text>
        </svg>
    `;
    
    // Warehouse Distribution
    document.getElementById('brandWarehouseContent').innerHTML = d.warehouses.map(w => `
        <div class="flex items-center gap-2">
            <div class="w-14 text-[10px] text-gray-300">${w.name}</div>
            <div class="flex-1">
                <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-[9px] text-gray-500">${w.stock} 件</span>
                    <span class="text-[9px]" style="color:${statusColors[w.status]}">WOS ${w.wos}</span>
                </div>
                <div class="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div class="h-full rounded-full" style="width:${parseFloat(w.wos) / 6 * 100}%;background:${statusColors[w.status]}"></div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Category Breakdown
    document.getElementById('brandCategoryContent').innerHTML = d.categories.map(c => `
        <div class="flex items-center gap-2">
            <div class="w-16 text-[10px] text-gray-300">${c.name}</div>
            <div class="flex items-center gap-2 flex-1">
                <div class="h-2 bg-white/5 rounded-full overflow-hidden flex-1">
                    <div class="h-full rounded-full" style="width:${c.pct}%;background:${statusColors[c.status]}"></div>
                </div>
                <span class="text-[10px] mono" style="color:${statusColors[c.status]}">${c.pct}%</span>
            </div>
        </div>
    `).join('');
    
    // Category IHI Grid
    document.getElementById('brandCategoryIhiGrid').innerHTML = d.categoryIhi.map(c => {
        const color = c.status === 'green' ? 'var(--optimal)' : c.status === 'yellow' ? 'var(--warning)' : 'var(--critical)';
        const fillColor = c.status === 'green' ? 'rgba(200,245,96,0.2)' : c.status === 'yellow' ? 'rgba(245,200,66,0.2)' : 'rgba(245,96,96,0.2)';
        const strokeColor = c.status === 'green' ? '#c8f560' : c.status === 'yellow' ? '#f5c842' : '#f56060';
        return `
        <div class="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer">
            <div class="text-[9px] text-gray-400 mb-0.5">${c.name}</div>
            <div class="flex items-baseline gap-0.5 mb-0.5">
                <span class="text-base font-bold mono" style="color:${color}">${c.score}</span>
                <span class="text-[7px] text-gray-500 mono">/100</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-[7px]" style="color:${color}">${c.trend}</span>
                <div class="h-2 w-8"><svg viewBox="0 0 32 8" class="w-full h-full"><path fill="${fillColor}" d="M0,6 L0,${c.trendDir === 'up' ? 6 : 2} Q8,${c.trendDir === 'up' ? 4 : 4} 16,${c.trendDir === 'up' ? 3 : 5} T32,${c.trendDir === 'up' ? 1 : 7} L32,8 L0,8 Z"/><path fill="none" stroke="${strokeColor}" stroke-width="0.8" d="M0,${c.trendDir === 'up' ? 6 : 2} Q8,${c.trendDir === 'up' ? 4 : 4} 16,${c.trendDir === 'up' ? 3 : 5} T32,${c.trendDir === 'up' ? 1 : 7}"/></svg></div>
            </div>
        </div>
    `;}).join('');
    
    // AI Decisions
    document.getElementById('brandAiCount').textContent = d.ai.length + ' 条建议';
    document.getElementById('brandAiDecisions').innerHTML = d.ai.map(a => {
        // 根据异常类型确定报告文件
        let reportFile = 'ai-report-sample.html';
        if (a.type === '异常检测' || a.type === '趋势预警') {
            reportFile = 'ai-report-shortage.html';
        } else if (a.type === '库存平衡') {
            reportFile = 'ai-report-structure.html';
        } else if (a.type === '滞销预警') {
            reportFile = 'ai-report-overstock.html';
        }
        return `
        <a href="${reportFile}" target="_blank" class="block p-2 rounded-lg ${a.status === 'red' ? 'bg-red-500/10 border border-red-500/20' : a.status === 'yellow' ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-white/5 border border-white/5'} cursor-pointer hover:bg-white/10 transition-colors no-underline">
            <div class="flex items-center gap-2 mb-1">
                <span class="tag ${a.status === 'red' ? 'tag-red' : a.status === 'yellow' ? 'tag-yellow' : 'tag-green'} text-[8px]">${a.type}</span>
                <span class="text-[9px] text-gray-400 mono">${a.sku}</span>
                <span class="text-[9px] text-gray-500 ml-auto">${a.trigger}</span>
            </div>
            <div class="text-[10px] text-white mb-0.5">${a.desc}</div>
            <div class="flex items-center justify-between">
                <span class="text-[9px]" style="color:${a.status === 'red' ? 'var(--critical)' : a.status === 'yellow' ? 'var(--warning)' : 'var(--optimal)'}">${a.benefit}</span>
                <span class="text-[8px] text-blue-400 flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                    分析报告
                </span>
            </div>
        </a>
    `}).join('');
    
    document.getElementById('brandOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBrandDetail() {
    document.getElementById('brandOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// 自动注入 overlay HTML
injectBrandOverlay();

