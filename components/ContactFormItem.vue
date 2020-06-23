<template>
    <form action="https://api.staticforms.xyz/submit" method="post">
        <div class="envelope">
            <input type="hidden" name="accessKey" :value="key">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">{{ $t('contact.subject') }}</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="text" name="subject" required>
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">{{ $t('contact.from') }}</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="text" name="name" :placeholder="$t('contact.name')" required>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="email" name="email" :placeholder="$t('contact.email')" required>
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">{{ $t('contact.topic') }}</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="select">
                            <select name="$topic">
                                <option value="job">{{ $t('contact.job') }}</option>
                                <option value="openSource">{{ $t('contact.openSource') }}</option>
                                <option value="lunch">{{ $t('contact.lunch') }}</option>
                                <option value="else">{{ $t('contact.else') }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">{{ $t('contact.message') }}</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <textarea class="textarea" rows="6" name="message" required />
                    </div>
                </div>
            </div>
            <input type="hidden" name="redirectTo" :value="env">
            <div class="field is-horizontal">
                <div class="field-label is-normal" />
                <div class="field-body">
                    <div class="field">
                        <p class="control"> 
                            <button class="button is-success" type="submit">
                                {{ $t('contact.sendMessage') }}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
  export default {
    name: 'ContactFormItem',
    data() {
        return {
            env: process.env.baseUrl,
            key: process.env.staticformsKey
        }
    }
 }
</script>