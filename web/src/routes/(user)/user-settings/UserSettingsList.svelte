<script lang="ts">
  import SettingAccordion from '#lib/components/shared-components/settings/SettingAccordion.svelte';
  import { OpenQueryParam } from '#lib/constants.ts';
  import { createPreloadedQuery } from '#lib/queries/client.ts';
  import { getUserConfigQuery } from '#lib/queries/config-user.query.ts';
  import {
    mdiAccountGroupOutline,
    mdiAccountOutline,
    mdiApi,
    mdiBellOutline,
    mdiCogOutline,
    mdiDevices,
    mdiDownload,
    mdiFeatureSearchOutline,
    mdiLockSmart,
    mdiServerOutline,
    mdiShieldKeyOutline,
  } from '@mdi/js';
  import { t } from 'svelte-i18n';
  import AppSettings from './AppSettings.svelte';
  import DeviceList from './DeviceList.svelte';
  import DownloadSettings from './DownloadSettings.svelte';
  import FeatureSettings from './FeatureSettings.svelte';
  import NotificationsSettings from './NotificationsSettings.svelte';
  import ChangePinCodeSettings from './PinCodeSettings.svelte';
  import SharingSettings from './SharingSettings.svelte';
  import UserApiKeyList from './UserApiKeyList.svelte';
  import UserPasskeyList from './UserPasskeyList.svelte';
  import UserProfileSettings from './UserProfileSettings.svelte';
  import UserUsageStatistic from './UserUsageStatistic.svelte';

  const query = createPreloadedQuery(getUserConfigQuery);
  const config = $derived(query.data);
</script>

<SettingAccordion
  icon={mdiCogOutline}
  key="app-settings"
  title={$t('app_settings')}
  subtitle={$t('manage_the_app_settings')}
>
  <AppSettings />
</SettingAccordion>

<SettingAccordion icon={mdiAccountOutline} key="account" title={$t('account')} subtitle={$t('manage_your_account')}>
  <UserProfileSettings />
</SettingAccordion>

<SettingAccordion
  icon={mdiServerOutline}
  key="user-usage-info"
  title={$t('user_usage_stats')}
  subtitle={$t('user_usage_stats_description')}
>
  <UserUsageStatistic />
</SettingAccordion>

<SettingAccordion icon={mdiApi} key="api-keys" title={$t('api_keys')} subtitle={$t('manage_your_api_keys')}>
  <UserApiKeyList />
</SettingAccordion>

<SettingAccordion
  icon={mdiDevices}
  key="authorized-devices"
  title={$t('authorized_devices')}
  subtitle={$t('manage_your_devices')}
>
  <DeviceList />
</SettingAccordion>

<SettingAccordion
  icon={mdiDownload}
  key="download-settings"
  title={$t('download_settings')}
  subtitle={$t('download_settings_description')}
>
  <DownloadSettings />
</SettingAccordion>

<SettingAccordion
  icon={mdiFeatureSearchOutline}
  key="feature"
  title={$t('features')}
  subtitle={$t('features_setting_description')}
>
  <FeatureSettings />
</SettingAccordion>

<SettingAccordion
  icon={mdiBellOutline}
  key={OpenQueryParam.NOTIFICATIONS}
  title={$t('notifications')}
  subtitle={$t('notifications_setting_description')}
>
  <NotificationsSettings />
</SettingAccordion>

{#if config.passkey.enabled}
  <SettingAccordion
    icon={mdiShieldKeyOutline}
    key="passkeys"
    title={$t('passkeys', { values: { count: 5 } })}
    subtitle={$t('manage_your_passkeys')}
  >
    <UserPasskeyList />
  </SettingAccordion>
{/if}

<SettingAccordion
  icon={mdiLockSmart}
  key="user-pin-code-settings"
  title={$t('user_pin_code_settings')}
  subtitle={$t('user_pin_code_settings_description')}
  autoScrollTo={true}
>
  <ChangePinCodeSettings />
</SettingAccordion>

<SettingAccordion
  icon={mdiAccountGroupOutline}
  key={OpenQueryParam.SHARING}
  title={$t('sharing')}
  subtitle={$t('manage_sharing_with_other_users')}
>
  <SharingSettings />
</SettingAccordion>
