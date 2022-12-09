import styles from './Popover.module.css';
import * as Popover from '@radix-ui/react-popover';
import { DotsThree, PencilSimple, X } from 'phosphor-react';

export const CustomPopover = () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <a role={'button'} className={styles.IconButton} aria-label="Update dimensions">
          <DotsThree size={24} weight="bold" />
        </a>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.PopoverContent} sideOffset={5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="#">
              <span>Edit</span>
              <span><PencilSimple size={18} /></span>
            </a>
          </div>
          {/* <Popover.Arrow className={styles.PopoverArrow} /> */}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
);