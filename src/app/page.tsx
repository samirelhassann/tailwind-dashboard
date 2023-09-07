/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  BoldIcon,
  ItalicIcon,
  Link2,
  List,
  ListOrdered,
  Mail,
} from "lucide-react";

import { Button } from "./components/Button";
import FileInput from "./components/Form/FileInput";
import Select from "./components/Form/Select";
import { TextArea } from "./components/Form/TextArea";
import Input from "./components/Input";
import { SettingsTabs } from "./components/SettingsTabs";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
        <SettingsTabs />
      </header>

      <main className="flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 py-6">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>

          <div className="flex items-center gap-2 ">
            <Button variant="outline" type="submit" form="settings">
              Cancel
            </Button>

            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="flex w-full flex-col divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form-row py-6">
            <label
              htmlFor="name"
              className="text-sm/5 font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Prefix />
                <Input.Control id="name" placeholder="John" />
              </Input.Root>
              <Input.Root>
                <Input.Prefix />
                <Input.Control placeholder="Doe" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form-row py-6">
            <label
              htmlFor="email"
              className="text-sm/5 font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" placeholder="email@gmail.com" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form-row py-6">
            <div className="flex flex-col">
              <label
                htmlFor="photo"
                className="text-sm/5 font-medium text-zinc-700"
              >
                Your Photo
              </label>
              <span className="text-sm text-zinc-500">
                This will be displayed on your profile.
              </span>
            </div>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form-row py-6">
            <div className="flex flex-col">
              <label
                htmlFor="role"
                className="text-sm/5 font-medium text-zinc-700"
              >
                Role
              </label>
            </div>
            <Input.Root>
              <Input.Prefix />
              <Input.Control id="role" placeholder="Developer" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form-row py-6">
            <label
              htmlFor="country"
              className="text-sm/5 font-medium text-zinc-700"
            >
              Country
            </label>

            <Select.Root placeholder="Select a country">
              <Select.SelectItem text="Brasil" value="br" />
              <Select.SelectItem text="United States" value="us" />
            </Select.Root>
          </div>

          <div className="grid grid-cols-form-row py-6">
            <label
              htmlFor="timezone"
              className="text-sm/5 font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select.Root placeholder="Select a timezone">
              <Select.SelectItem
                text="Pacific Standard Time (PST)"
                value="pst"
              />
              <Select.SelectItem text="America/Sao_Paulo" value="br" />
            </Select.Root>
          </div>

          <div className="grid grid-cols-form-row py-6">
            <div className="flex flex-col">
              <label
                htmlFor="bio"
                className="text-sm/5 font-medium text-zinc-700"
              >
                Bio
              </label>
              <span className="text-sm text-zinc-500">
                Write a short introduction.
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-4">
                <Select.Root placeholder="" defaultValue="normal">
                  <Select.SelectItem text="Normal Text" value="normal" />
                  <Select.SelectItem text="Markdown" value="md" />
                </Select.Root>

                <div className="flex gap-2">
                  <Button type="button" variant="ghost">
                    <BoldIcon
                      className="h-5 w-5 text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ItalicIcon
                      className="h-5 w-5 text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link2 className="h-5 w-5 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-5 w-5 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-5 w-5 text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form-row py-6">
            <div className="flex flex-col">
              <label
                htmlFor="portfolio"
                className="text-sm/5 font-medium text-zinc-700"
              >
                Portfolio projects
              </label>
              <span className="text-sm text-zinc-500">
                Share a few snippets of your work.
              </span>
            </div>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="submit" form="settings">
              Cancel
            </Button>

            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
