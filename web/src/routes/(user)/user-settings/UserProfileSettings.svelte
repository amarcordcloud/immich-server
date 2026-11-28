<script lang="ts">
  import { authManager } from '#lib/managers/auth-manager.svelte.ts';
  import { Field, Input } from '@immich/ui';
  import { cloneDeep } from 'lodash-es';
  import { t } from 'svelte-i18n';
  import { fade } from 'svelte/transition';

  let editedUser = $state(cloneDeep(authManager.user));
</script>

<section class="my-4">
  <div in:fade={{ duration: 500 }}>
    <form autocomplete="off" onsubmit={(event) => event.preventDefault()}>
      <div class="flex flex-col gap-4 sm:ms-8">
        <Field label={$t('user_id')} disabled>
          <Input bind:value={editedUser.id} />
        </Field>

        <Field label={$t('email')} disabled>
          <Input type="email" value={editedUser.email} readonly />
        </Field>

        <Field label={$t('name')} disabled>
          <Input value={editedUser.name} readonly />
        </Field>

        <Field label={$t('storage_label')} disabled>
          <Input value={editedUser.storageLabel || ''} />
        </Field>
      </div>
    </form>
  </div>
</section>
