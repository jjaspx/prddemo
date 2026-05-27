// overlay-sku.js - SKU详情弹窗模块
// Creator: Zero skill

function injectSkuOverlay() {
    document.body.insertAdjacentHTML('beforeend', `
<!-- SKU Detail Overlay - 单品库存参谋 -->
<div id="skuOverlay" class="detail-overlay">
    <div class="detail-content w-[95vw] max-w-[1600px] h-[90vh] overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-white/10">
            <div>
                <div class="text-xs text-gray-500 mb-1">单品库存参谋 · SKU INVENTORY ADVISOR</div>
                <div class="flex items-center gap-3">
                    <h2 id="skuTitle" class="text-xl font-bold text-white">SDFN2379W-BLK-09</h2>
                    <span class="tag tag-yellow">DP Fashion</span>
                    <span class="tag tag-green">在售</span>
                </div>
            </div>
            <button onclick="closeSkuDetail()" class="btn btn-ghost p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        
        <!-- Content -->
        <div class="flex-1 overflow-y-auto p-4">
            <!-- 视角1: 单品盈利健康视角 -->
            <div class="mb-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center text-[10px] font-bold text-green-400">1</span>
                    <h3 class="text-sm font-medium text-white">单品盈利健康视角</h3>
                    <span class="text-[10px] text-gray-500">核心：利润率 + 盈利效率</span>
                </div>
                <div class="grid grid-cols-6 gap-2">
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">毛利率</div>
                        <div class="text-base font-bold mono" style="color:var(--optimal)">32.5%</div>
                        <div class="text-[8px] text-green-400">+2.1pp</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">净利率</div>
                        <div class="text-base font-bold mono" style="color:var(--optimal)">18.2%</div>
                        <div class="text-[8px] text-green-400">+1.3pp</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">ROI</div>
                        <div class="text-base font-bold mono" style="color:var(--optimal)">2.8x</div>
                        <div class="text-[8px] text-gray-500">年化</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">累计利润</div>
                        <div class="text-base font-bold mono text-white">¥48.6K</div>
                        <div class="text-[8px] text-gray-500">本年度</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">利润贡献</div>
                        <div class="text-base font-bold mono" style="color:var(--optimal)">TOP 15%</div>
                        <div class="text-[8px] text-gray-500">类目排名</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">盈利状态</div>
                        <div class="text-base font-bold" style="color:var(--optimal)">盈利</div>
                        <div class="tag tag-green text-[7px]">HEALTHY</div>
                    </div>
                </div>
            </div>
            
            <!-- 视角2: 历史-当前-未来库存时序视角 -->
            <div class="mb-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">2</span>
                    <h3 class="text-sm font-medium text-white">库存时序视角</h3>
                    <span class="text-[10px] text-gray-500">核心：历史-当前-未来</span>
                </div>
                <div class="glass p-3">
                    <div class="grid grid-cols-3 gap-4">
                        <!-- 历史 -->
                        <div>
                            <div class="text-[10px] text-gray-500 mb-2 flex items-center gap-1">
                                <span class="w-2 h-2 rounded-full bg-gray-500"></span>历史库存 (近30天)
                            </div>
                            <div class="h-16">
                                <svg viewBox="0 0 200 60" class="w-full h-full">
                                    <path fill="rgba(156,163,175,0.2)" d="M0,50 L0,40 Q40,35 80,42 T160,30 L200,35 L200,60 L0,60 Z"/>
                                    <path fill="none" stroke="#6b7280" stroke-width="1.5" d="M0,40 Q40,35 80,42 T160,30 L200,35"/>
                                </svg>
                            </div>
                            <div class="flex justify-between text-[8px] text-gray-500 mt-1">
                                <span>最低: 412</span><span>最高: 680</span><span>均值: 512</span>
                            </div>
                        </div>
                        <!-- 当前 -->
                        <div class="border-x border-white/10 px-4">
                            <div class="text-[10px] text-gray-500 mb-2 flex items-center gap-1">
                                <span class="w-2 h-2 rounded-full bg-green-400"></span>当前库存
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold mono text-white">612</div>
                                <div class="text-[9px] text-gray-500">件</div>
                                <div class="mt-2 grid grid-cols-2 gap-2 text-[8px]">
                                    <div class="bg-white/5 rounded p-1">
                                        <div class="text-gray-500">可售</div>
                                        <div class="text-white font-medium">580</div>
                                    </div>
                                    <div class="bg-white/5 rounded p-1">
                                        <div class="text-gray-500">在途</div>
                                        <div class="text-white font-medium">32</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 未来 -->
                        <div>
                            <div class="text-[10px] text-gray-500 mb-2 flex items-center gap-1">
                                <span class="w-2 h-2 rounded-full bg-yellow-400"></span>未来预测 (14天)
                            </div>
                            <div class="h-16">
                                <svg viewBox="0 0 200 60" class="w-full h-full">
                                    <path fill="rgba(245,200,66,0.2)" d="M0,35 L0,30 Q50,25 100,28 T200,45 L200,60 L0,60 Z"/>
                                    <path fill="none" stroke="#f5c842" stroke-width="1.5" stroke-dasharray="4,2" d="M0,30 Q50,25 100,28 T200,45"/>
                                </svg>
                            </div>
                            <div class="flex justify-between text-[8px] text-gray-500 mt-1">
                                <span>预计销量: 186</span><span>预计结余: 426</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 视角3: 库存周转视角 -->
            <div class="mb-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center text-[10px] font-bold text-purple-400">3</span>
                    <h3 class="text-sm font-medium text-white">库存周转视角</h3>
                    <span class="text-[10px] text-gray-500">核心：周转效率 + 资金占用</span>
                </div>
                <div class="grid grid-cols-4 gap-2">
                    <div class="glass p-2">
                        <div class="text-[9px] text-gray-500 mb-1">周转天数</div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-lg font-bold mono" style="color:var(--warning)">45</span>
                            <span class="text-[9px] text-gray-500">天</span>
                        </div>
                        <div class="text-[8px] text-yellow-400">类目均值: 38天</div>
                    </div>
                    <div class="glass p-2">
                        <div class="text-[9px] text-gray-500 mb-1">周转率</div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-lg font-bold mono" style="color:var(--optimal)">8.1</span>
                            <span class="text-[9px] text-gray-500">次/年</span>
                        </div>
                        <div class="text-[8px] text-green-400">高于基准 15%</div>
                    </div>
                    <div class="glass p-2">
                        <div class="text-[9px] text-gray-500 mb-1">资金占用</div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-lg font-bold mono text-white">¥48.9K</span>
                        </div>
                        <div class="text-[8px] text-gray-500">成本 ¥79.9/件</div>
                    </div>
                    <div class="glass p-2">
                        <div class="text-[9px] text-gray-500 mb-1">动销率</div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-lg font-bold mono" style="color:var(--optimal)">92%</span>
                        </div>
                        <div class="text-[8px] text-green-400">健康</div>
                    </div>
                </div>
            </div>
            
            <!-- 视角4: 缺货风险视角 -->
            <div class="mb-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-5 h-5 rounded bg-red-500/20 flex items-center justify-center text-[10px] font-bold text-red-400">4</span>
                    <h3 class="text-sm font-medium text-white">缺货风险视角</h3>
                    <span class="text-[10px] text-gray-500">核心：缺货预警 + 履约保障</span>
                </div>
                <div class="grid grid-cols-5 gap-2">
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">缺货风险</div>
                        <div class="tag tag-green text-[9px] mt-1">低风险</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">可售天数</div>
                        <div class="text-base font-bold mono" style="color:var(--optimal)">18</div>
                        <div class="text-[8px] text-gray-500">天</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">安全库存</div>
                        <div class="text-base font-bold mono text-white">200</div>
                        <div class="text-[8px] text-green-400">充足</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">断货次数</div>
                        <div class="text-base font-bold mono text-white">2</div>
                        <div class="text-[8px] text-gray-500">近90天</div>
                    </div>
                    <div class="glass p-2 text-center">
                        <div class="text-[9px] text-gray-500">履约率</div>
                        <div class="text-base font-bold mono" style="color:var(--optimal)">98.5%</div>
                        <div class="text-[8px] text-green-400">优秀</div>
                    </div>
                </div>
            </div>
            
            <!-- 视角5: 滞销风险视角 -->
            <div class="mb-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center text-[10px] font-bold text-orange-400">5</span>
                    <h3 class="text-sm font-medium text-white">滞销风险视角</h3>
                    <span class="text-[10px] text-gray-500">核心：滞销识别 + 积压清理</span>
                </div>
                <div class="grid grid-cols-4 gap-2">
                    <div class="glass p-2">
                        <div class="text-[9px] text-gray-500 mb-1">滞销风险</div>
                        <div class="tag tag-yellow text-[9px]">中等</div>
                        <div class="text-[8px] text-yellow-400 mt-1">库龄偏长</div>
                    </div>
                    <div class="glass p-2">
                        <div class="text-[9px] text-gray-500 mb-1">滞销库存</div>
                        <div class="text-base font-bold mono" style="color:var(--warning)">86</div>
                        <div class="text-[8px] text-gray-500">件 · 占比14%</div>
                    </div>
                    <div class="glass p-2">
                        <div class="text-[9px] text-gray-500 mb-1">最长库龄</div>
                        <div class="text-base font-bold mono" style="color:var(--warning)">198</div>
                        <div class="text-[8px] text-gray-500">天</div>
                    </div>
                    <div class="glass p-2">
                        <div class="text-[9px] text-gray-500 mb-1">建议操作</div>
                        <div class="text-[10px] text-yellow-400 font-medium">促销清仓</div>
                        <div class="text-[8px] text-gray-500">预计损失 ¥2.1K</div>
                    </div>
                </div>
            </div>
            
            <!-- 视角6: SKU分层结构视角 -->
            <div class="mb-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-5 h-5 rounded bg-cyan-500/20 flex items-center justify-center text-[10px] font-bold text-cyan-400">6</span>
                    <h3 class="text-sm font-medium text-white">SKU分层结构视角</h3>
                    <span class="text-[10px] text-gray-500">核心：价值分层 + 资源倾斜</span>
                </div>
                <div class="glass p-3">
                    <div class="flex items-center gap-4">
                        <div class="text-center">
                            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/30 to-yellow-600/10 flex items-center justify-center border-2 border-yellow-500">
                                <span class="text-lg font-bold text-yellow-400">A</span>
                            </div>
                            <div class="text-[9px] text-gray-500 mt-1">价值等级</div>
                        </div>
                        <div class="flex-1 grid grid-cols-4 gap-3">
                            <div>
                                <div class="text-[9px] text-gray-500">销售额排名</div>
                                <div class="text-sm font-bold text-white">#128</div>
                                <div class="text-[8px] text-green-400">TOP 8%</div>
                            </div>
                            <div>
                                <div class="text-[9px] text-gray-500">利润贡献</div>
                                <div class="text-sm font-bold text-white">¥48.6K</div>
                                <div class="text-[8px] text-gray-500">类目占比 2.3%</div>
                            </div>
                            <div>
                                <div class="text-[9px] text-gray-500">资源倾斜</div>
                                <div class="text-sm font-bold text-green-400">优先</div>
                                <div class="text-[8px] text-gray-500">库存/营销</div>
                            </div>
                            <div>
                                <div class="text-[9px] text-gray-500">生命周期</div>
                                <div class="text-sm font-bold text-white">成长期</div>
                                <div class="text-[8px] text-green-400">↑ 持续增长</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 视角7: 库龄健康视角 -->
            <div class="mb-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-5 h-5 rounded bg-teal-500/20 flex items-center justify-center text-[10px] font-bold text-teal-400">7</span>
                    <h3 class="text-sm font-medium text-white">库龄健康视角</h3>
                    <span class="text-[10px] text-gray-500">核心：库龄管控 + 损耗防控</span>
                </div>
                <div class="glass p-3">
                    <div class="flex items-center gap-4">
                        <div class="flex-1">
                            <div class="h-6 bg-white/5 rounded-full overflow-hidden flex">
                                <div class="h-full" style="width:58%;background:linear-gradient(90deg,#c8f560,#a8d040)"></div>
                                <div class="h-full" style="width:22%;background:linear-gradient(90deg,#60a5fa,#3b82f6)"></div>
                                <div class="h-full" style="width:14%;background:linear-gradient(90deg,#f5c842,#d4a72c)"></div>
                                <div class="h-full" style="width:6%;background:linear-gradient(90deg,#f56060,#d94040)"></div>
                            </div>
                            <div class="grid grid-cols-4 gap-1 mt-2">
                                <div class="text-center">
                                    <div class="w-2 h-2 rounded mx-auto" style="background:#c8f560"></div>
                                    <div class="text-[8px] text-gray-500">0-90天</div>
                                    <div class="text-[9px] text-white font-medium">355件</div>
                                </div>
                                <div class="text-center">
                                    <div class="w-2 h-2 rounded mx-auto" style="background:#60a5fa"></div>
                                    <div class="text-[8px] text-gray-500">90-180天</div>
                                    <div class="text-[9px] text-white font-medium">135件</div>
                                </div>
                                <div class="text-center">
                                    <div class="w-2 h-2 rounded mx-auto" style="background:#f5c842"></div>
                                    <div class="text-[8px] text-gray-500">180-360天</div>
                                    <div class="text-[9px] text-white font-medium">86件</div>
                                </div>
                                <div class="text-center">
                                    <div class="w-2 h-2 rounded mx-auto" style="background:#f56060"></div>
                                    <div class="text-[8px] text-gray-500">360天+</div>
                                    <div class="text-[9px] text-white font-medium">36件</div>
                                </div>
                            </div>
                        </div>
                        <div class="w-24 text-center">
                            <div class="text-[9px] text-gray-500">库龄健康度</div>
                            <div class="text-2xl font-bold" style="color:var(--warning)">72</div>
                            <div class="text-[8px] text-yellow-400">需关注</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 视角8: 端到端全链路视角 -->
            <div class="mb-2">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-400">8</span>
                    <h3 class="text-sm font-medium text-white">端到端全链路视角</h3>
                    <span class="text-[10px] text-gray-500">核心：全环节协同 + 问题定位</span>
                </div>
                <div class="glass p-3">
                    <div class="flex items-center justify-between">
                        <!-- 采购 -->
                        <div class="text-center">
                            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto">
                                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                            </div>
                            <div class="text-[9px] text-white mt-1">采购</div>
                            <div class="tag tag-green text-[7px]">正常</div>
                        </div>
                        <div class="flex-1 h-0.5 bg-green-500/30 mx-2"></div>
                        <!-- 仓储 -->
                        <div class="text-center">
                            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto">
                                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            </div>
                            <div class="text-[9px] text-white mt-1">仓储</div>
                            <div class="tag tag-green text-[7px]">正常</div>
                        </div>
                        <div class="flex-1 h-0.5 bg-green-500/30 mx-2"></div>
                        <!-- 销售 -->
                        <div class="text-center">
                            <div class="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center mx-auto">
                                <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                            </div>
                            <div class="text-[9px] text-white mt-1">销售</div>
                            <div class="tag tag-yellow text-[7px]">增速放缓</div>
                        </div>
                        <div class="flex-1 h-0.5 bg-green-500/30 mx-2"></div>
                        <!-- 物流 -->
                        <div class="text-center">
                            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto">
                                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                            </div>
                            <div class="text-[9px] text-white mt-1">物流</div>
                            <div class="tag tag-green text-[7px]">正常</div>
                        </div>
                        <div class="flex-1 h-0.5 bg-green-500/30 mx-2"></div>
                        <!-- 售后 -->
                        <div class="text-center">
                            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto">
                                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
                            </div>
                            <div class="text-[9px] text-white mt-1">售后</div>
                            <div class="tag tag-green text-[7px]">退货率 2.1%</div>
                        </div>
                    </div>
                    <div class="mt-3 p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                        <div class="text-[10px] text-yellow-400 font-medium">⚠ 问题定位：销售环节增速放缓，建议优化营销策略或调整定价</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `);
}

// 注入 HTML
injectSkuOverlay();

function openSkuDetail(sku) {
    document.getElementById('skuTitle').textContent = sku;
    document.getElementById('skuOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSkuDetail() {
    document.getElementById('skuOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// 自动注入 overlay HTML
injectSkuOverlay();

