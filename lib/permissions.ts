export const ROLES=['SUPER_ADMIN','OWNER','COMPANY_ADMIN','MANAGER','SALES_PRICING','OPERATIONS','DG_USER','FINANCE','READ_ONLY','DEMO','MARKETPLACE_CUSTOMER'] as const;
export type Role=typeof ROLES[number];
export const APP_KEYS=['PRICING','CONTRACT_KYC','OPERATIONS','DG_VAULT','MARKETPLACE'] as const;
export function canAccess(entitlements:string[],app:string){return entitlements.includes(app)}
export function requireTenantRecord<T extends {companyId:string}>(record:T,companyId:string){if(record.companyId!==companyId)throw new Error('Forbidden: cross-tenant access');return record}
